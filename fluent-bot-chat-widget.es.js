var Vr = Array.isArray, mc = Array.prototype.indexOf, Zr = Array.from, $o = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Ho = Object.getOwnPropertyDescriptors, gc = Object.prototype, _c = Array.prototype, Yr = Object.getPrototypeOf, Li = Object.isExtensible;
function Pn(e) {
  return typeof e == "function";
}
const mn = () => {
};
function xc(e) {
  return e();
}
function Au(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const lt = 2, Wo = 4, qu = 8, Kr = 16, Nt = 32, En = 64, Du = 128, tt = 256, Su = 512, Ye = 1024, Mt = 2048, cn = 4096, Tt = 8192, ju = 16384, vc = 32768, Qn = 65536, yc = 1 << 17, kc = 1 << 19, Go = 1 << 20, Or = 1 << 21, Wt = Symbol("$state"), Vo = Symbol("legacy props"), wc = Symbol("");
function Zo(e) {
  return e === this.v;
}
function Yo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Xr(e) {
  return !Yo(e, this.v);
}
function Ec(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Cc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ac(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Dc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Sc(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Tc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Oc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Cn = !1;
function Mc() {
  Cn = !0;
}
const Jr = 1, Qr = 2, Ko = 4, Rc = 8, Nc = 16, Ic = 1, Pc = 2, Xo = 4, Lc = 8, Bc = 16, zc = 1, qc = 2, He = Symbol(), jc = "http://www.w3.org/1999/xhtml", Uc = "http://www.w3.org/2000/svg";
function Jo(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let he = null;
function Bi(e) {
  he = e;
}
function An(e, t = !1, n) {
  var u = he = {
    p: he,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Cn && !t && (he.l = {
    s: null,
    u: null,
    r1: [],
    r2: xn(!1)
  }), ni(() => {
    u.d = !0;
  });
}
function Dn(e) {
  const t = he;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      var n = ee, u = ue;
      t.e = null;
      try {
        for (var r = 0; r < o.length; r++) {
          var i = o[r];
          Gt(i.effect), Et(i.reaction), ui(i.fn);
        }
      } finally {
        Gt(n), Et(u);
      }
    }
    he = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function eu() {
  return !Cn || he !== null && he.l === null;
}
function tn(e) {
  if (typeof e != "object" || e === null || Wt in e)
    return e;
  const t = Yr(e);
  if (t !== gc && t !== _c)
    return e;
  var n = /* @__PURE__ */ new Map(), u = Vr(e), r = /* @__PURE__ */ ve(0), i = ue, o = (a) => {
    var s = ue;
    Et(i);
    var c = a();
    return Et(s), c;
  };
  return u && n.set("length", /* @__PURE__ */ ve(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, s, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Tc();
        var l = n.get(s);
        return l === void 0 ? (l = o(() => /* @__PURE__ */ ve(c.value)), n.set(s, l)) : B(
          l,
          o(() => tn(c.value))
        ), !0;
      },
      deleteProperty(a, s) {
        var c = n.get(s);
        if (c === void 0)
          s in a && (n.set(
            s,
            o(() => /* @__PURE__ */ ve(He))
          ), dr(r));
        else {
          if (u && typeof s == "string") {
            var l = (
              /** @type {Source<number>} */
              n.get("length")
            ), f = Number(s);
            Number.isInteger(f) && f < l.v && B(l, f);
          }
          B(c, He), dr(r);
        }
        return !0;
      },
      get(a, s, c) {
        if (s === Wt)
          return e;
        var l = n.get(s), f = s in a;
        if (l === void 0 && (!f || Ht(a, s)?.writable) && (l = o(() => /* @__PURE__ */ ve(tn(f ? a[s] : He))), n.set(s, l)), l !== void 0) {
          var h = C(l);
          return h === He ? void 0 : h;
        }
        return Reflect.get(a, s, c);
      },
      getOwnPropertyDescriptor(a, s) {
        var c = Reflect.getOwnPropertyDescriptor(a, s);
        if (c && "value" in c) {
          var l = n.get(s);
          l && (c.value = C(l));
        } else if (c === void 0) {
          var f = n.get(s), h = f?.v;
          if (f !== void 0 && h !== He)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return c;
      },
      has(a, s) {
        if (s === Wt)
          return !0;
        var c = n.get(s), l = c !== void 0 && c.v !== He || Reflect.has(a, s);
        if (c !== void 0 || ee !== null && (!l || Ht(a, s)?.writable)) {
          c === void 0 && (c = o(() => /* @__PURE__ */ ve(l ? tn(a[s]) : He)), n.set(s, c));
          var f = C(c);
          if (f === He)
            return !1;
        }
        return l;
      },
      set(a, s, c, l) {
        var f = n.get(s), h = s in a;
        if (u && s === "length")
          for (var b = c; b < /** @type {Source<number>} */
          f.v; b += 1) {
            var d = n.get(b + "");
            d !== void 0 ? B(d, He) : b in a && (d = o(() => /* @__PURE__ */ ve(He)), n.set(b + "", d));
          }
        f === void 0 ? (!h || Ht(a, s)?.writable) && (f = o(() => /* @__PURE__ */ ve(void 0)), B(
          f,
          o(() => tn(c))
        ), n.set(s, f)) : (h = f.v !== He, B(
          f,
          o(() => tn(c))
        ));
        var g = Reflect.getOwnPropertyDescriptor(a, s);
        if (g?.set && g.set.call(l, c), !h) {
          if (u && typeof s == "string") {
            var m = (
              /** @type {Source<number>} */
              n.get("length")
            ), A = Number(s);
            Number.isInteger(A) && A >= m.v && B(m, A + 1);
          }
          dr(r);
        }
        return !0;
      },
      ownKeys(a) {
        C(r);
        var s = Reflect.ownKeys(a).filter((f) => {
          var h = n.get(f);
          return h === void 0 || h.v !== He;
        });
        for (var [c, l] of n)
          l.v !== He && !(c in a) && s.push(c);
        return s;
      },
      setPrototypeOf() {
        Oc();
      }
    }
  );
}
function dr(e, t = 1) {
  B(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
  var t = lt | Mt, n = ue !== null && (ue.f & lt) !== 0 ? (
    /** @type {Derived} */
    ue
  ) : null;
  return ee === null || n !== null && (n.f & tt) !== 0 ? t |= tt : ee.f |= Go, {
    ctx: he,
    deps: null,
    effects: null,
    equals: Zo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? ee
  };
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  const t = /* @__PURE__ */ _n(e);
  return ba(t), t;
}
// @__NO_SIDE_EFFECTS__
function ei(e) {
  const t = /* @__PURE__ */ _n(e);
  return t.equals = Xr, t;
}
function Qo(e) {
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
function $c(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & lt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function ea(e) {
  var t, n = ee;
  Gt($c(e));
  try {
    Qo(e), t = _a(e);
  } finally {
    Gt(n);
  }
  return t;
}
function ta(e) {
  var t = ea(e), n = (Ut || (e.f & tt) !== 0) && e.deps !== null ? cn : Ye;
  ft(e, n), e.equals(t) || (e.v = t, e.wv = ma());
}
const Hn = /* @__PURE__ */ new Map();
function xn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Zo,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  const n = xn(e);
  return ba(n), n;
}
// @__NO_SIDE_EFFECTS__
function ti(e, t = !1) {
  const n = xn(e);
  return t || (n.equals = Xr), Cn && he !== null && he.l !== null && (he.l.s ??= []).push(n), n;
}
function B(e, t, n = !1) {
  ue !== null && !vt && eu() && (ue.f & (lt | Kr)) !== 0 && !Ft?.includes(e) && Fc();
  let u = n ? tn(t) : t;
  return Fr(e, u);
}
function Fr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    uu ? Hn.set(e, t) : Hn.set(e, n), e.v = t, (e.f & lt) !== 0 && ((e.f & Mt) !== 0 && ea(
      /** @type {Derived} */
      e
    ), ft(e, (e.f & tt) === 0 ? Ye : cn)), e.wv = ma(), na(e, Mt), eu() && ee !== null && (ee.f & Ye) !== 0 && (ee.f & (Nt | En)) === 0 && (rt === null ? Jc([e]) : rt.push(e));
  }
  return t;
}
function zi(e, t = 1) {
  var n = C(e), u = t === 1 ? n++ : n--;
  return B(e, n), u;
}
function na(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var u = eu(), r = n.length, i = 0; i < r; i++) {
      var o = n[i], a = o.f;
      (a & Mt) === 0 && (!u && o === ee || (ft(o, t), (a & (Ye | tt)) !== 0 && ((a & lt) !== 0 ? na(
        /** @type {Derived} */
        o,
        cn
      ) : Wu(
        /** @type {Effect} */
        o
      ))));
    }
}
let Hc = !1;
var qi, ua, ra, ia;
function Wc() {
  if (qi === void 0) {
    qi = window, ua = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ra = Ht(t, "firstChild").get, ia = Ht(t, "nextSibling").get, Li(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Li(n) && (n.__t = void 0);
  }
}
function Uu(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  return ra.call(e);
}
// @__NO_SIDE_EFFECTS__
function $u(e) {
  return ia.call(e);
}
function W(e, t) {
  return /* @__PURE__ */ yt(e);
}
function ye(e, t) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ yt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ $u(n) : n;
  }
}
function de(e, t = 1, n = !1) {
  let u = e;
  for (; t--; )
    u = /** @type {TemplateNode} */
    /* @__PURE__ */ $u(u);
  return u;
}
function Gc(e) {
  e.textContent = "";
}
function oa(e) {
  ee === null && ue === null && Ac(), ue !== null && (ue.f & tt) !== 0 && ee === null && Cc(), uu && Ec();
}
function Vc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Sn(e, t, n, u = !0) {
  var r = ee, i = {
    ctx: he,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Mt,
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
      oi(i), i.f |= vc;
    } catch (s) {
      throw Rt(i), s;
    }
  else t !== null && Wu(i);
  var o = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Go | Du)) === 0;
  if (!o && u && (r !== null && Vc(i, r), ue !== null && (ue.f & lt) !== 0)) {
    var a = (
      /** @type {Derived} */
      ue
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function ni(e) {
  const t = Sn(qu, null, !1);
  return ft(t, Ye), t.teardown = e, t;
}
function Ot(e) {
  oa();
  var t = ee !== null && (ee.f & Nt) !== 0 && he !== null && !he.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      he
    );
    (n.e ??= []).push({
      fn: e,
      effect: ee,
      reaction: ue
    });
  } else {
    var u = ui(e);
    return u;
  }
}
function Zc(e) {
  return oa(), ri(e);
}
function Yc(e) {
  const t = Sn(En, e, !0);
  return (n = {}) => new Promise((u) => {
    n.outro ? vn(t, () => {
      Rt(t), u(void 0);
    }) : (Rt(t), u(void 0));
  });
}
function ui(e) {
  return Sn(Wo, e, !1);
}
function ri(e) {
  return Sn(qu, e, !0);
}
function pe(e, t = [], n = _n) {
  const u = t.map(n);
  return tu(() => e(...u.map(C)));
}
function tu(e, t = 0) {
  return Sn(qu | Kr | t, e, !0);
}
function an(e, t = !0) {
  return Sn(qu | Nt, e, !0, t);
}
function aa(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = uu, u = ue;
    Ui(!0), Et(null);
    try {
      t.call(null);
    } finally {
      Ui(n), Et(u);
    }
  }
}
function sa(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var u = n.next;
    (n.f & En) !== 0 ? n.parent = null : Rt(n, t), n = u;
  }
}
function Kc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Nt) === 0 && Rt(t), t = n;
  }
}
function Rt(e, t = !0) {
  var n = !1;
  (t || (e.f & kc) !== 0) && e.nodes_start !== null && (ca(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), sa(e, t && !n), Mu(e, 0), ft(e, ju);
  var u = e.transitions;
  if (u !== null)
    for (const i of u)
      i.stop();
  aa(e);
  var r = e.parent;
  r !== null && r.first !== null && la(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function ca(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ $u(e)
    );
    e.remove(), e = n;
  }
}
function la(e) {
  var t = e.parent, n = e.prev, u = e.next;
  n !== null && (n.next = u), u !== null && (u.prev = n), t !== null && (t.first === e && (t.first = u), t.last === e && (t.last = n));
}
function vn(e, t) {
  var n = [];
  ii(e, n, !0), fa(n, () => {
    Rt(e), t && t();
  });
}
function fa(e, t) {
  var n = e.length;
  if (n > 0) {
    var u = () => --n || t();
    for (var r of e)
      r.out(u);
  } else
    t();
}
function ii(e, t, n) {
  if ((e.f & Tt) === 0) {
    if (e.f ^= Tt, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var u = e.first; u !== null; ) {
      var r = u.next, i = (u.f & Qn) !== 0 || (u.f & Nt) !== 0;
      ii(u, t, i ? n : !1), u = r;
    }
  }
}
function Wn(e) {
  da(e, !0);
}
function da(e, t) {
  if ((e.f & Tt) !== 0) {
    e.f ^= Tt, (e.f & Ye) === 0 && (e.f ^= Ye), ru(e) && (ft(e, Mt), Wu(e));
    for (var n = e.first; n !== null; ) {
      var u = n.next, r = (n.f & Qn) !== 0 || (n.f & Nt) !== 0;
      da(n, r ? t : !1), n = u;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let Gn = [], Mr = [];
function ha() {
  var e = Gn;
  Gn = [], Au(e);
}
function Xc() {
  var e = Mr;
  Mr = [], Au(e);
}
function nu(e) {
  Gn.length === 0 && queueMicrotask(ha), Gn.push(e);
}
function ji() {
  Gn.length > 0 && ha(), Mr.length > 0 && Xc();
}
let yu = !1, Tu = !1, Ou = null, rn = !1, uu = !1;
function Ui(e) {
  uu = e;
}
let $n = [];
let ue = null, vt = !1;
function Et(e) {
  ue = e;
}
let ee = null;
function Gt(e) {
  ee = e;
}
let Ft = null;
function ba(e) {
  ue !== null && ue.f & Or && (Ft === null ? Ft = [e] : Ft.push(e));
}
let $e = null, et = 0, rt = null;
function Jc(e) {
  rt = e;
}
let pa = 1, Fu = 0, Ut = !1;
function ma() {
  return ++pa;
}
function ru(e) {
  var t = e.f;
  if ((t & Mt) !== 0)
    return !0;
  if ((t & cn) !== 0) {
    var n = e.deps, u = (t & tt) !== 0;
    if (n !== null) {
      var r, i, o = (t & Su) !== 0, a = u && ee !== null && !Ut, s = n.length;
      if (o || a) {
        var c = (
          /** @type {Derived} */
          e
        ), l = c.parent;
        for (r = 0; r < s; r++)
          i = n[r], (o || !i?.reactions?.includes(c)) && (i.reactions ??= []).push(c);
        o && (c.f ^= Su), a && l !== null && (l.f & tt) === 0 && (c.f ^= tt);
      }
      for (r = 0; r < s; r++)
        if (i = n[r], ru(
          /** @type {Derived} */
          i
        ) && ta(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!u || ee !== null && !Ut) && ft(e, Ye);
  }
  return !1;
}
function Qc(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & Du) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= Du;
      }
    n = n.parent;
  }
  throw yu = !1, e;
}
function $i(e) {
  return (e.f & ju) === 0 && (e.parent === null || (e.parent.f & Du) === 0);
}
function Hu(e, t, n, u) {
  if (yu) {
    if (n === null && (yu = !1), $i(t))
      throw e;
    return;
  }
  if (n !== null && (yu = !0), Qc(e, t), $i(t))
    throw e;
}
function ga(e, t, n = !0) {
  var u = e.reactions;
  if (u !== null)
    for (var r = 0; r < u.length; r++) {
      var i = u[r];
      Ft?.includes(e) || ((i.f & lt) !== 0 ? ga(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? ft(i, Mt) : (i.f & Ye) !== 0 && ft(i, cn), Wu(
        /** @type {Effect} */
        i
      )));
    }
}
function _a(e) {
  var t = $e, n = et, u = rt, r = ue, i = Ut, o = Ft, a = he, s = vt, c = e.f;
  $e = /** @type {null | Value[]} */
  null, et = 0, rt = null, Ut = (c & tt) !== 0 && (vt || !rn || ue === null), ue = (c & (Nt | En)) === 0 ? e : null, Ft = null, Bi(e.ctx), vt = !1, Fu++, e.f |= Or;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if ($e !== null) {
      var h;
      if (Mu(e, et), f !== null && et > 0)
        for (f.length = et + $e.length, h = 0; h < $e.length; h++)
          f[et + h] = $e[h];
      else
        e.deps = f = $e;
      if (!Ut)
        for (h = et; h < f.length; h++)
          (f[h].reactions ??= []).push(e);
    } else f !== null && et < f.length && (Mu(e, et), f.length = et);
    if (eu() && rt !== null && !vt && f !== null && (e.f & (lt | cn | Mt)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      rt.length; h++)
        ga(
          rt[h],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (Fu++, rt !== null && (u === null ? u = rt : u.push(.../** @type {Source[]} */
    rt))), l;
  } finally {
    $e = t, et = n, rt = u, ue = r, Ut = i, Ft = o, Bi(a), vt = s, e.f ^= Or;
  }
}
function el(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var u = mc.call(n, e);
    if (u !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[u] = n[r], n.pop());
    }
  }
  n === null && (t.f & lt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  ($e === null || !$e.includes(t)) && (ft(t, cn), (t.f & (tt | Su)) === 0 && (t.f ^= Su), Qo(
    /** @type {Derived} **/
    t
  ), Mu(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Mu(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var u = t; u < n.length; u++)
      el(e, n[u]);
}
function oi(e) {
  var t = e.f;
  if ((t & ju) === 0) {
    ft(e, Ye);
    var n = ee, u = he, r = rn;
    ee = e, rn = !0;
    try {
      (t & Kr) !== 0 ? Kc(e) : sa(e), aa(e);
      var i = _a(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = pa;
      var o = e.deps, a;
    } catch (s) {
      Hu(s, e, n, u || e.ctx);
    } finally {
      rn = r, ee = n;
    }
  }
}
function tl() {
  try {
    Dc();
  } catch (e) {
    if (Ou !== null)
      Hu(e, Ou, null);
    else
      throw e;
  }
}
function xa() {
  var e = rn;
  try {
    var t = 0;
    for (rn = !0; $n.length > 0; ) {
      t++ > 1e3 && tl();
      var n = $n, u = n.length;
      $n = [];
      for (var r = 0; r < u; r++) {
        var i = ul(n[r]);
        nl(i);
      }
      Hn.clear();
    }
  } finally {
    Tu = !1, rn = e, Ou = null;
  }
}
function nl(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var u = e[n];
      if ((u.f & (ju | Tt)) === 0)
        try {
          ru(u) && (oi(u), u.deps === null && u.first === null && u.nodes_start === null && (u.teardown === null ? la(u) : u.fn = null));
        } catch (r) {
          Hu(r, u, null, u.ctx);
        }
    }
}
function Wu(e) {
  Tu || (Tu = !0, queueMicrotask(xa));
  for (var t = Ou = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (En | Nt)) !== 0) {
      if ((n & Ye) === 0) return;
      t.f ^= Ye;
    }
  }
  $n.push(t);
}
function ul(e) {
  for (var t = [], n = e; n !== null; ) {
    var u = n.f, r = (u & (Nt | En)) !== 0, i = r && (u & Ye) !== 0;
    if (!i && (u & Tt) === 0) {
      if ((u & Wo) !== 0)
        t.push(n);
      else if (r)
        n.f ^= Ye;
      else
        try {
          ru(n) && oi(n);
        } catch (s) {
          Hu(s, n, null, n.ctx);
        }
      var o = n.first;
      if (o !== null) {
        n = o;
        continue;
      }
    }
    var a = n.parent;
    for (n = n.next; n === null && a !== null; )
      n = a.next, a = a.parent;
  }
  return t;
}
function rl(e) {
  var t;
  for (ji(); $n.length > 0; )
    Tu = !0, xa(), ji();
  return (
    /** @type {T} */
    t
  );
}
async function Hi() {
  await Promise.resolve(), rl();
}
function C(e) {
  var t = e.f, n = (t & lt) !== 0;
  if (ue !== null && !vt) {
    if (!Ft?.includes(e)) {
      var u = ue.deps;
      e.rv < Fu && (e.rv = Fu, $e === null && u !== null && u[et] === e ? et++ : $e === null ? $e = [e] : (!Ut || !$e.includes(e)) && $e.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), i = r.parent;
    i !== null && (i.f & tt) === 0 && (r.f ^= tt);
  }
  return n && (r = /** @type {Derived} */
  e, ru(r) && ta(r)), uu && Hn.has(e) ? Hn.get(e) : e.v;
}
function Vt(e) {
  var t = vt;
  try {
    return vt = !0, e();
  } finally {
    vt = t;
  }
}
const il = -7169;
function ft(e, t) {
  e.f = e.f & il | t;
}
function ol(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wt in e)
      Rr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wt in n && Rr(n);
      }
  }
}
function Rr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let u in e)
      try {
        Rr(e[u], t);
      } catch {
      }
    const n = Yr(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const u = Ho(n);
      for (let r in u) {
        const i = u[r].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
function al(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const sl = [
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
function cl(e) {
  return sl.includes(e);
}
const ll = {
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
function fl(e) {
  return e = e.toLowerCase(), ll[e] ?? e;
}
const dl = ["touchstart", "touchmove"];
function hl(e) {
  return dl.includes(e);
}
function bl(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, nu(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Wi = !1;
function pl() {
  Wi || (Wi = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function va(e) {
  var t = ue, n = ee;
  Et(null), Gt(null);
  try {
    return e();
  } finally {
    Et(t), Gt(n);
  }
}
function ml(e, t, n, u = n) {
  e.addEventListener(t, () => va(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), u(!0);
  } : e.__on_r = () => u(!0), pl();
}
const ya = /* @__PURE__ */ new Set(), Nr = /* @__PURE__ */ new Set();
function ka(e, t, n, u = {}) {
  function r(i) {
    if (u.capture || Un.call(t, i), !i.cancelBubble)
      return va(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? nu(() => {
    t.addEventListener(e, r, u);
  }) : t.addEventListener(e, r, u), r;
}
function gu(e, t, n, u, r) {
  var i = { capture: u, passive: r }, o = ka(e, t, n, i);
  (t === document.body || t === window || t === document) && ni(() => {
    t.removeEventListener(e, o, i);
  });
}
function iu(e) {
  for (var t = 0; t < e.length; t++)
    ya.add(e[t]);
  for (var n of Nr)
    n(e);
}
function Un(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), u = e.type, r = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    r[0] || e.target
  ), o = 0, a = e.__root;
  if (a) {
    var s = r.indexOf(a);
    if (s !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = r.indexOf(t);
    if (c === -1)
      return;
    s <= c && (o = s);
  }
  if (i = /** @type {Element} */
  r[o] || e.target, i !== t) {
    $o(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var l = ue, f = ee;
    Et(null), Gt(null);
    try {
      for (var h, b = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var g = i["__" + u];
          if (g != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Vr(g)) {
              var [m, ...A] = g;
              m.apply(i, [e, ...A]);
            } else
              g.call(i, e);
        } catch (_) {
          h ? b.push(_) : h = _;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        i = d;
      }
      if (h) {
        for (let _ of b)
          queueMicrotask(() => {
            throw _;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Et(l), Gt(f);
    }
  }
}
function ai(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function yn(e, t) {
  var n = (
    /** @type {Effect} */
    ee
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ce(e, t) {
  var n = (t & zc) !== 0, u = (t & qc) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = ai(i ? e : "<!>" + e), n || (r = /** @type {Node} */
    /* @__PURE__ */ yt(r)));
    var o = (
      /** @type {TemplateNode} */
      u || ua ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      yn(a, s);
    } else
      yn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function gl(e, t, n = "svg") {
  var u = !e.startsWith("<!>"), r = `<${n}>${u ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (!i) {
      var o = (
        /** @type {DocumentFragment} */
        ai(r)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ yt(o)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ yt(a);
    }
    var s = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return yn(s, s), s;
  };
}
function Me() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Uu();
  return e.append(t, n), yn(t, n), e;
}
function q(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function nn(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function hr(e, t) {
  return _l(e, t);
}
const dn = /* @__PURE__ */ new Map();
function _l(e, { target: t, anchor: n, props: u = {}, events: r, context: i, intro: o = !0 }) {
  Wc();
  var a = /* @__PURE__ */ new Set(), s = (f) => {
    for (var h = 0; h < f.length; h++) {
      var b = f[h];
      if (!a.has(b)) {
        a.add(b);
        var d = hl(b);
        t.addEventListener(b, Un, { passive: d });
        var g = dn.get(b);
        g === void 0 ? (document.addEventListener(b, Un, { passive: d }), dn.set(b, 1)) : dn.set(b, g + 1);
      }
    }
  };
  s(Zr(ya)), Nr.add(s);
  var c = void 0, l = Yc(() => {
    var f = n ?? t.appendChild(Uu());
    return an(() => {
      if (i) {
        An({});
        var h = (
          /** @type {ComponentContext} */
          he
        );
        h.c = i;
      }
      r && (u.$$events = r), c = e(f, u) || {}, i && Dn();
    }), () => {
      for (var h of a) {
        t.removeEventListener(h, Un);
        var b = (
          /** @type {number} */
          dn.get(h)
        );
        --b === 0 ? (document.removeEventListener(h, Un), dn.delete(h)) : dn.set(h, b);
      }
      Nr.delete(s), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return xl.set(c, l), c;
}
let xl = /* @__PURE__ */ new WeakMap();
function Ee(e, t, [n, u] = [0, 0]) {
  var r = e, i = null, o = null, a = He, s = n > 0 ? Qn : 0, c = !1;
  const l = (h, b = !0) => {
    c = !0, f(b, h);
  }, f = (h, b) => {
    a !== (a = h) && (a ? (i ? Wn(i) : b && (i = an(() => b(r))), o && vn(o, () => {
      o = null;
    })) : (o ? Wn(o) : b && (o = an(() => b(r, [n + 1, u]))), i && vn(i, () => {
      i = null;
    })));
  };
  tu(() => {
    c = !1, t(l), c || f(null, null);
  }, s);
}
function si(e, t) {
  return t;
}
function vl(e, t, n, u) {
  for (var r = [], i = t.length, o = 0; o < i; o++)
    ii(t[o].e, r, !0);
  var a = i > 0 && r.length === 0 && n !== null;
  if (a) {
    var s = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Gc(s), s.append(
      /** @type {Element} */
      n
    ), u.clear(), zt(e, t[0].prev, t[i - 1].next);
  }
  fa(r, () => {
    for (var c = 0; c < i; c++) {
      var l = t[c];
      a || (u.delete(l.k), zt(e, l.prev, l.next)), Rt(l.e, !a);
    }
  });
}
function Ru(e, t, n, u, r, i = null) {
  var o = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, s = (t & Ko) !== 0;
  if (s) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(Uu());
  }
  var l = null, f = !1, h = /* @__PURE__ */ ei(() => {
    var b = n();
    return Vr(b) ? b : b == null ? [] : Zr(b);
  });
  tu(() => {
    var b = C(h), d = b.length;
    f && d === 0 || (f = d === 0, yl(b, a, o, r, t, u, n), i !== null && (d === 0 ? l ? Wn(l) : l = an(() => i(o)) : l !== null && vn(l, () => {
      l = null;
    })), C(h));
  });
}
function yl(e, t, n, u, r, i, o) {
  var a = (r & Rc) !== 0, s = (r & (Jr | Qr)) !== 0, c = e.length, l = t.items, f = t.first, h = f, b, d = null, g, m = [], A = [], _, w, v, k;
  if (a)
    for (k = 0; k < c; k += 1)
      _ = e[k], w = i(_, k), v = l.get(w), v !== void 0 && (v.a?.measure(), (g ??= /* @__PURE__ */ new Set()).add(v));
  for (k = 0; k < c; k += 1) {
    if (_ = e[k], w = i(_, k), v = l.get(w), v === void 0) {
      var y = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : n;
      d = wl(
        y,
        t,
        d,
        d === null ? t.first : d.next,
        _,
        w,
        k,
        u,
        r,
        o
      ), l.set(w, d), m = [], A = [], h = d.next;
      continue;
    }
    if (s && kl(v, _, k, r), (v.e.f & Tt) !== 0 && (Wn(v.e), a && (v.a?.unfix(), (g ??= /* @__PURE__ */ new Set()).delete(v))), v !== h) {
      if (b !== void 0 && b.has(v)) {
        if (m.length < A.length) {
          var O = A[0], P;
          d = O.prev;
          var H = m[0], le = m[m.length - 1];
          for (P = 0; P < m.length; P += 1)
            Gi(m[P], O, n);
          for (P = 0; P < A.length; P += 1)
            b.delete(A[P]);
          zt(t, H.prev, le.next), zt(t, d, H), zt(t, le, O), h = O, d = le, k -= 1, m = [], A = [];
        } else
          b.delete(v), Gi(v, h, n), zt(t, v.prev, v.next), zt(t, v, d === null ? t.first : d.next), zt(t, d, v), d = v;
        continue;
      }
      for (m = [], A = []; h !== null && h.k !== w; )
        (h.e.f & Tt) === 0 && (b ??= /* @__PURE__ */ new Set()).add(h), A.push(h), h = h.next;
      if (h === null)
        continue;
      v = h;
    }
    m.push(v), d = v, h = v.next;
  }
  if (h !== null || b !== void 0) {
    for (var re = b === void 0 ? [] : Zr(b); h !== null; )
      (h.e.f & Tt) === 0 && re.push(h), h = h.next;
    var Ce = re.length;
    if (Ce > 0) {
      var Ie = (r & Ko) !== 0 && c === 0 ? n : null;
      if (a) {
        for (k = 0; k < Ce; k += 1)
          re[k].a?.measure();
        for (k = 0; k < Ce; k += 1)
          re[k].a?.fix();
      }
      vl(t, re, Ie, l);
    }
  }
  a && nu(() => {
    if (g !== void 0)
      for (v of g)
        v.a?.apply();
  }), ee.first = t.first && t.first.e, ee.last = d && d.e;
}
function kl(e, t, n, u) {
  (u & Jr) !== 0 && Fr(e.v, t), (u & Qr) !== 0 ? Fr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function wl(e, t, n, u, r, i, o, a, s, c) {
  var l = (s & Jr) !== 0, f = (s & Nc) === 0, h = l ? f ? /* @__PURE__ */ ti(r) : xn(r) : r, b = (s & Qr) === 0 ? o : xn(o), d = {
    i: b,
    v: h,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: u
  };
  try {
    return d.e = an(() => a(e, h, b, c), Hc), d.e.prev = n && n.e, d.e.next = u && u.e, n === null ? t.first = d : (n.next = d, n.e.next = d.e), u !== null && (u.prev = d, u.e.prev = d.e), d;
  } finally {
  }
}
function Gi(e, t, n) {
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
      /* @__PURE__ */ $u(i)
    );
    r.before(i), i = o;
  }
}
function zt(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function El(e, t, n = !1, u = !1, r = !1) {
  var i = e, o = "";
  pe(() => {
    var a = (
      /** @type {Effect} */
      ee
    );
    if (o !== (o = t() ?? "") && (a.nodes_start !== null && (ca(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), o !== "")) {
      var s = o + "";
      n ? s = `<svg>${s}</svg>` : u && (s = `<math>${s}</math>`);
      var c = ai(s);
      if ((n || u) && (c = /** @type {Element} */
      /* @__PURE__ */ yt(c)), yn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ yt(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), n || u)
        for (; /* @__PURE__ */ yt(c); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ yt(c)
          );
      else
        i.before(c);
    }
  });
}
function Ne(e, t, n, u, r) {
  var i = t.$$slots?.[n], o = !1;
  i === !0 && (i = t.children, o = !0), i === void 0 || i(e, o ? () => u : u);
}
function Cl(e, t, n) {
  var u = e, r, i;
  tu(() => {
    r !== (r = t()) && (i && (vn(i), i = null), r && (i = an(() => n(u, r))));
  }, Qn);
}
function Al(e, t, n, u, r, i) {
  var o, a, s = null, c = (
    /** @type {TemplateNode} */
    e
  ), l;
  tu(() => {
    const f = t() || null;
    var h = Uc;
    f !== o && (l && (f === null ? vn(l, () => {
      l = null, a = null;
    }) : f === a ? Wn(l) : Rt(l)), f && f !== a && (l = an(() => {
      if (s = document.createElementNS(h, f), yn(s, s), u) {
        var b = (
          /** @type {TemplateNode} */
          s.appendChild(Uu())
        );
        u(s, b);
      }
      ee.nodes_end = s, c.before(s);
    })), o = f, o && (a = o));
  }, Qn);
}
function Gu(e, t) {
  nu(() => {
    var n = e.getRootNode(), u = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!u.querySelector("#" + t.hash)) {
      const r = document.createElement("style");
      r.id = t.hash, r.textContent = t.code, u.appendChild(r);
    }
  });
}
function wa(e) {
  var t, n, u = "";
  if (typeof e == "string" || typeof e == "number") u += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = wa(e[t])) && (u && (u += " "), u += n);
  } else for (n in e) e[n] && (u && (u += " "), u += n);
  return u;
}
function Dl() {
  for (var e, t, n = 0, u = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = wa(e)) && (u && (u += " "), u += t);
  return u;
}
function Sl(e) {
  return typeof e == "object" ? Dl(e) : e ?? "";
}
const Vi = [...` 	
\r\f \v\uFEFF`];
function Tl(e, t, n) {
  var u = e == null ? "" : "" + e;
  if (t && (u = u ? u + " " + t : t), n) {
    for (var r in n)
      if (n[r])
        u = u ? u + " " + r : r;
      else if (u.length)
        for (var i = r.length, o = 0; (o = u.indexOf(r, o)) >= 0; ) {
          var a = o + i;
          (o === 0 || Vi.includes(u[o - 1])) && (a === u.length || Vi.includes(u[a])) ? u = (o === 0 ? "" : u.substring(0, o)) + u.substring(a + 1) : o = a;
        }
  }
  return u === "" ? null : u;
}
function Zi(e, t = !1) {
  var n = t ? " !important;" : ";", u = "";
  for (var r in e) {
    var i = e[r];
    i != null && i !== "" && (u += " " + r + ": " + i + n);
  }
  return u;
}
function br(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Ol(e, t) {
  if (t) {
    var n = "", u, r;
    if (Array.isArray(t) ? (u = t[0], r = t[1]) : u = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, o = 0, a = !1, s = [];
      u && s.push(...Object.keys(u).map(br)), r && s.push(...Object.keys(r).map(br));
      var c = 0, l = -1;
      const g = e.length;
      for (var f = 0; f < g; f++) {
        var h = e[f];
        if (a ? h === "/" && e[f - 1] === "*" && (a = !1) : i ? i === h && (i = !1) : h === "/" && e[f + 1] === "*" ? a = !0 : h === '"' || h === "'" ? i = h : h === "(" ? o++ : h === ")" && o--, !a && i === !1 && o === 0) {
          if (h === ":" && l === -1)
            l = f;
          else if (h === ";" || f === g - 1) {
            if (l !== -1) {
              var b = br(e.substring(c, l).trim());
              if (!s.includes(b)) {
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
    return u && (n += Zi(u)), r && (n += Zi(r, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function at(e, t, n, u, r, i) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var a = Tl(n, u, i);
    a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a), e.__className = n;
  } else if (i && r !== i)
    for (var s in i) {
      var c = !!i[s];
      (r == null || c !== !!r[s]) && e.classList.toggle(s, c);
    }
  return i;
}
function pr(e, t = {}, n, u) {
  for (var r in n) {
    var i = n[r];
    t[r] !== i && (n[r] == null ? e.style.removeProperty(r) : e.style.setProperty(r, i, u));
  }
}
function st(e, t, n, u) {
  var r = e.__style;
  if (r !== t) {
    var i = Ol(t, u);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else u && (Array.isArray(u) ? (pr(e, n?.[0], u[0]), pr(e, n?.[1], u[1], "important")) : pr(e, n, u));
  return u;
}
const Ln = Symbol("class"), Bn = Symbol("style"), Ea = Symbol("is custom element"), Ca = Symbol("is html");
function Fl(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Be(e, t, n, u) {
  var r = Aa(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[wc] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Da(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Yi(e, t, n, u, r = !1) {
  var i = Aa(e), o = i[Ea], a = !i[Ca], s = t || {}, c = e.tagName === "OPTION";
  for (var l in t)
    l in n || (n[l] = null);
  n.class ? n.class = Sl(n.class) : n[Ln] && (n.class = null), n[Bn] && (n.style ??= null);
  var f = Da(e);
  for (const _ in n) {
    let w = n[_];
    if (c && _ === "value" && w == null) {
      e.value = e.__value = "", s[_] = w;
      continue;
    }
    if (_ === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      at(e, h, w, u, t?.[Ln], n[Ln]), s[_] = w, s[Ln] = n[Ln];
      continue;
    }
    if (_ === "style") {
      st(e, w, t?.[Bn], n[Bn]), s[_] = w, s[Bn] = n[Bn];
      continue;
    }
    var b = s[_];
    if (w !== b) {
      s[_] = w;
      var d = _[0] + _[1];
      if (d !== "$$")
        if (d === "on") {
          const v = {}, k = "$$" + _;
          let y = _.slice(2);
          var g = cl(y);
          if (al(y) && (y = y.slice(0, -7), v.capture = !0), !g && b) {
            if (w != null) continue;
            e.removeEventListener(y, s[k], v), s[k] = null;
          }
          if (w != null)
            if (g)
              e[`__${y}`] = w, iu([y]);
            else {
              let O = function(P) {
                s[_].call(this, P);
              };
              s[k] = ka(y, e, O, v);
            }
          else g && (e[`__${y}`] = void 0);
        } else if (_ === "style")
          Be(e, _, w);
        else if (_ === "autofocus")
          bl(
            /** @type {HTMLElement} */
            e,
            !!w
          );
        else if (!o && (_ === "__value" || _ === "value" && w != null))
          e.value = e.__value = w;
        else if (_ === "selected" && c)
          Fl(
            /** @type {HTMLOptionElement} */
            e,
            w
          );
        else {
          var m = _;
          a || (m = fl(m));
          var A = m === "defaultValue" || m === "defaultChecked";
          if (w == null && !o && !A)
            if (i[_] = null, m === "value" || m === "checked") {
              let v = (
                /** @type {HTMLInputElement} */
                e
              );
              const k = t === void 0;
              if (m === "value") {
                let y = v.defaultValue;
                v.removeAttribute(m), v.defaultValue = y, v.value = v.__value = k ? y : null;
              } else {
                let y = v.defaultChecked;
                v.removeAttribute(m), v.defaultChecked = y, v.checked = k ? y : !1;
              }
            } else
              e.removeAttribute(_);
          else A || f.includes(m) && (o || typeof w != "string") ? e[m] = w : typeof w != "function" && Be(e, m, w);
        }
    }
  }
  return s;
}
function Aa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Ea]: e.nodeName.includes("-"),
      [Ca]: e.namespaceURI === jc
    }
  );
}
var Ki = /* @__PURE__ */ new Map();
function Da(e) {
  var t = Ki.get(e.nodeName);
  if (t) return t;
  Ki.set(e.nodeName, t = []);
  for (var n, u = e, r = Element.prototype; r !== u; ) {
    n = Ho(u);
    for (var i in n)
      n[i].set && t.push(i);
    u = Yr(u);
  }
  return t;
}
function Sa(e, t, n = t) {
  var u = eu();
  ml(e, "input", (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = mr(e) ? gr(i) : i, n(i), u && i !== (i = t())) {
      var o = e.selectionStart, a = e.selectionEnd;
      e.value = i ?? "", a !== null && (e.selectionStart = o, e.selectionEnd = Math.min(a, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Vt(t) == null && e.value && n(mr(e) ? gr(e.value) : e.value), ri(() => {
    var r = t();
    mr(e) && r === gr(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function mr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function gr(e) {
  return e === "" ? null : +e;
}
function Xi(e, t) {
  return e === t || e?.[Wt] === t;
}
function ku(e = {}, t, n, u) {
  return ui(() => {
    var r, i;
    return ri(() => {
      r = i, i = [], Vt(() => {
        e !== n(...i) && (t(e, ...i), r && Xi(n(...r), e) && t(null, ...r));
      });
    }), () => {
      nu(() => {
        i && Xi(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ml(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    he
  ), n = t.l.u;
  if (!n) return;
  let u = () => ol(t.s);
  if (e) {
    let r = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ _n(() => {
      let a = !1;
      const s = t.s;
      for (const c in s)
        s[c] !== i[c] && (i[c] = s[c], a = !0);
      return a && r++, r;
    });
    u = () => C(o);
  }
  n.b.length && Zc(() => {
    Ji(t, u), Au(n.b);
  }), Ot(() => {
    const r = Vt(() => n.m.map(xc));
    return () => {
      for (const i of r)
        typeof i == "function" && i();
    };
  }), n.a.length && Ot(() => {
    Ji(t, u), Au(n.a);
  });
}
function Ji(e, t) {
  if (e.l.s)
    for (const n of e.l.s) C(n);
  t();
}
function Ta(e, t, n) {
  if (e == null)
    return t(void 0), mn;
  const u = Vt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return u.unsubscribe ? () => u.unsubscribe() : u;
}
const hn = [];
function Rl(e, t = mn) {
  let n = null;
  const u = /* @__PURE__ */ new Set();
  function r(a) {
    if (Yo(e, a) && (e = a, n)) {
      const s = !hn.length;
      for (const c of u)
        c[1](), hn.push(c, e);
      if (s) {
        for (let c = 0; c < hn.length; c += 2)
          hn[c][0](hn[c + 1]);
        hn.length = 0;
      }
    }
  }
  function i(a) {
    r(a(
      /** @type {T} */
      e
    ));
  }
  function o(a, s = mn) {
    const c = [a, s];
    return u.add(c), u.size === 1 && (n = t(r, i) || mn), a(
      /** @type {T} */
      e
    ), () => {
      u.delete(c), u.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function Oa(e) {
  let t;
  return Ta(e, (n) => t = n)(), t;
}
let _u = !1, Ir = Symbol();
function Nl(e, t, n) {
  const u = n[t] ??= {
    store: null,
    source: /* @__PURE__ */ ti(void 0),
    unsubscribe: mn
  };
  if (u.store !== e && !(Ir in n))
    if (u.unsubscribe(), u.store = e ?? null, e == null)
      u.source.v = void 0, u.unsubscribe = mn;
    else {
      var r = !0;
      u.unsubscribe = Ta(e, (i) => {
        r ? u.source.v = i : B(u.source, i);
      }), r = !1;
    }
  return e && Ir in n ? Oa(e) : C(u.source);
}
function Il() {
  const e = {};
  function t() {
    ni(() => {
      for (var n in e)
        e[n].unsubscribe();
      $o(e, Ir, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Pl(e) {
  var t = _u;
  try {
    return _u = !1, [e(), _u];
  } finally {
    _u = t;
  }
}
const Ll = {
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
function Bl(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Ll
  );
}
const zl = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return C(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = Qt(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      Xo
    )), e.special[t](n), zi(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), zi(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Fe(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: xn(0) }, zl);
}
const ql = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let u = e.props[n];
      if (Pn(u) && (u = u()), typeof u == "object" && u !== null && t in u) return u[t];
    }
  },
  set(e, t, n) {
    let u = e.props.length;
    for (; u--; ) {
      let r = e.props[u];
      Pn(r) && (r = r());
      const i = Ht(r, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let u = e.props[n];
      if (Pn(u) && (u = u()), typeof u == "object" && u !== null && t in u) {
        const r = Ht(u, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === Wt || t === Vo) return !1;
    for (let n of e.props)
      if (Pn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Pn(n) && (n = n());
      for (const u in n)
        t.includes(u) || t.push(u);
    }
    return t;
  }
};
function je(...e) {
  return new Proxy({ props: e }, ql);
}
function Qi(e) {
  return e.ctx?.d ?? !1;
}
function Qt(e, t, n, u) {
  var r = (n & Ic) !== 0, i = !Cn || (n & Pc) !== 0, o = (n & Lc) !== 0, a = (n & Bc) !== 0, s = !1, c;
  o ? [c, s] = Pl(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var l = Wt in e || Vo in e, f = o && (Ht(e, t)?.set ?? (l && t in e && ((y) => e[t] = y))) || void 0, h = (
    /** @type {V} */
    u
  ), b = !0, d = !1, g = () => (d = !0, b && (b = !1, a ? h = Vt(
    /** @type {() => V} */
    u
  ) : h = /** @type {V} */
  u), h);
  c === void 0 && u !== void 0 && (f && i && Sc(), c = g(), f && f(c));
  var m;
  if (i)
    m = () => {
      var y = (
        /** @type {V} */
        e[t]
      );
      return y === void 0 ? g() : (b = !0, d = !1, y);
    };
  else {
    var A = (r ? _n : ei)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    A.f |= yc, m = () => {
      var y = C(A);
      return y !== void 0 && (h = /** @type {V} */
      void 0), y === void 0 ? h : y;
    };
  }
  if ((n & Xo) === 0)
    return m;
  if (f) {
    var _ = e.$$legacy;
    return function(y, O) {
      return arguments.length > 0 ? ((!i || !O || _ || s) && f(O ? m() : y), y) : m();
    };
  }
  var w = !1, v = /* @__PURE__ */ ti(c), k = /* @__PURE__ */ _n(() => {
    var y = m(), O = C(v);
    return w ? (w = !1, O) : v.v = y;
  });
  return o && C(k), r || (k.equals = Xr), function(y, O) {
    if (arguments.length > 0) {
      const P = O ? C(k) : i && o ? tn(y) : y;
      if (!k.equals(P)) {
        if (w = !0, B(v, P), d && h !== void 0 && (h = P), Qi(k))
          return y;
        Vt(() => C(k));
      }
      return y;
    }
    return Qi(k) ? k.v : C(k);
  };
}
function ci(e) {
  he === null && Jo(), Cn && he.l !== null ? Ul(he).m.push(e) : Ot(() => {
    const t = Vt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function jl(e) {
  he === null && Jo(), ci(() => () => Vt(e));
}
function Ul(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const $l = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add($l);
function Fa(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Hl } = Object.prototype, { getPrototypeOf: li } = Object, { iterator: Vu, toStringTag: Ma } = Symbol, Zu = /* @__PURE__ */ ((e) => (t) => {
  const n = Hl.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), dt = (e) => (e = e.toLowerCase(), (t) => Zu(t) === e), Yu = (e) => (t) => typeof t === e, { isArray: Tn } = Array, Vn = Yu("undefined");
function Wl(e) {
  return e !== null && !Vn(e) && e.constructor !== null && !Vn(e.constructor) && Ve(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ra = dt("ArrayBuffer");
function Gl(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ra(e.buffer), t;
}
const Vl = Yu("string"), Ve = Yu("function"), Na = Yu("number"), Ku = (e) => e !== null && typeof e == "object", Zl = (e) => e === !0 || e === !1, wu = (e) => {
  if (Zu(e) !== "object")
    return !1;
  const t = li(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ma in e) && !(Vu in e);
}, Yl = dt("Date"), Kl = dt("File"), Xl = dt("Blob"), Jl = dt("FileList"), Ql = (e) => Ku(e) && Ve(e.pipe), e0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ve(e.append) && ((t = Zu(e)) === "formdata" || // detect form-data instance
  t === "object" && Ve(e.toString) && e.toString() === "[object FormData]"));
}, t0 = dt("URLSearchParams"), [n0, u0, r0, i0] = ["ReadableStream", "Request", "Response", "Headers"].map(dt), o0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ou(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let u, r;
  if (typeof e != "object" && (e = [e]), Tn(e))
    for (u = 0, r = e.length; u < r; u++)
      t.call(null, e[u], u, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let a;
    for (u = 0; u < o; u++)
      a = i[u], t.call(null, e[a], a, e);
  }
}
function Ia(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let u = n.length, r;
  for (; u-- > 0; )
    if (r = n[u], t === r.toLowerCase())
      return r;
  return null;
}
const un = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Pa = (e) => !Vn(e) && e !== un;
function Pr() {
  const { caseless: e } = Pa(this) && this || {}, t = {}, n = (u, r) => {
    const i = e && Ia(t, r) || r;
    wu(t[i]) && wu(u) ? t[i] = Pr(t[i], u) : wu(u) ? t[i] = Pr({}, u) : Tn(u) ? t[i] = u.slice() : t[i] = u;
  };
  for (let u = 0, r = arguments.length; u < r; u++)
    arguments[u] && ou(arguments[u], n);
  return t;
}
const a0 = (e, t, n, { allOwnKeys: u } = {}) => (ou(t, (r, i) => {
  n && Ve(r) ? e[i] = Fa(r, n) : e[i] = r;
}, { allOwnKeys: u }), e), s0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), c0 = (e, t, n, u) => {
  e.prototype = Object.create(t.prototype, u), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, l0 = (e, t, n, u) => {
  let r, i, o;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
      o = r[i], (!u || u(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = n !== !1 && li(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, f0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const u = e.indexOf(t, n);
  return u !== -1 && u === n;
}, d0 = (e) => {
  if (!e) return null;
  if (Tn(e)) return e;
  let t = e.length;
  if (!Na(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, h0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && li(Uint8Array)), b0 = (e, t) => {
  const u = (e && e[Vu]).call(e);
  let r;
  for (; (r = u.next()) && !r.done; ) {
    const i = r.value;
    t.call(e, i[0], i[1]);
  }
}, p0 = (e, t) => {
  let n;
  const u = [];
  for (; (n = e.exec(t)) !== null; )
    u.push(n);
  return u;
}, m0 = dt("HTMLFormElement"), g0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, u, r) {
    return u.toUpperCase() + r;
  }
), eo = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), _0 = dt("RegExp"), La = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), u = {};
  ou(n, (r, i) => {
    let o;
    (o = t(r, i, e)) !== !1 && (u[i] = o || r);
  }), Object.defineProperties(e, u);
}, x0 = (e) => {
  La(e, (t, n) => {
    if (Ve(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const u = e[n];
    if (Ve(u)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, v0 = (e, t) => {
  const n = {}, u = (r) => {
    r.forEach((i) => {
      n[i] = !0;
    });
  };
  return Tn(e) ? u(e) : u(String(e).split(t)), n;
}, y0 = () => {
}, k0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function w0(e) {
  return !!(e && Ve(e.append) && e[Ma] === "FormData" && e[Vu]);
}
const E0 = (e) => {
  const t = new Array(10), n = (u, r) => {
    if (Ku(u)) {
      if (t.indexOf(u) >= 0)
        return;
      if (!("toJSON" in u)) {
        t[r] = u;
        const i = Tn(u) ? [] : {};
        return ou(u, (o, a) => {
          const s = n(o, r + 1);
          !Vn(s) && (i[a] = s);
        }), t[r] = void 0, i;
      }
    }
    return u;
  };
  return n(e, 0);
}, C0 = dt("AsyncFunction"), A0 = (e) => e && (Ku(e) || Ve(e)) && Ve(e.then) && Ve(e.catch), Ba = ((e, t) => e ? setImmediate : t ? ((n, u) => (un.addEventListener("message", ({ source: r, data: i }) => {
  r === un && i === n && u.length && u.shift()();
}, !1), (r) => {
  u.push(r), un.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ve(un.postMessage)
), D0 = typeof queueMicrotask < "u" ? queueMicrotask.bind(un) : typeof process < "u" && process.nextTick || Ba, S0 = (e) => e != null && Ve(e[Vu]), x = {
  isArray: Tn,
  isArrayBuffer: Ra,
  isBuffer: Wl,
  isFormData: e0,
  isArrayBufferView: Gl,
  isString: Vl,
  isNumber: Na,
  isBoolean: Zl,
  isObject: Ku,
  isPlainObject: wu,
  isReadableStream: n0,
  isRequest: u0,
  isResponse: r0,
  isHeaders: i0,
  isUndefined: Vn,
  isDate: Yl,
  isFile: Kl,
  isBlob: Xl,
  isRegExp: _0,
  isFunction: Ve,
  isStream: Ql,
  isURLSearchParams: t0,
  isTypedArray: h0,
  isFileList: Jl,
  forEach: ou,
  merge: Pr,
  extend: a0,
  trim: o0,
  stripBOM: s0,
  inherits: c0,
  toFlatObject: l0,
  kindOf: Zu,
  kindOfTest: dt,
  endsWith: f0,
  toArray: d0,
  forEachEntry: b0,
  matchAll: p0,
  isHTMLForm: m0,
  hasOwnProperty: eo,
  hasOwnProp: eo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: La,
  freezeMethods: x0,
  toObjectSet: v0,
  toCamelCase: g0,
  noop: y0,
  toFiniteNumber: k0,
  findKey: Ia,
  global: un,
  isContextDefined: Pa,
  isSpecCompliantForm: w0,
  toJSONObject: E0,
  isAsyncFn: C0,
  isThenable: A0,
  setImmediate: Ba,
  asap: D0,
  isIterable: S0
};
function $(e, t, n, u, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), u && (this.request = u), r && (this.response = r, this.status = r.status ? r.status : null);
}
x.inherits($, Error, {
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
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const za = $.prototype, qa = {};
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
  qa[e] = { value: e };
});
Object.defineProperties($, qa);
Object.defineProperty(za, "isAxiosError", { value: !0 });
$.from = (e, t, n, u, r, i) => {
  const o = Object.create(za);
  return x.toFlatObject(e, o, function(s) {
    return s !== Error.prototype;
  }, (a) => a !== "isAxiosError"), $.call(o, e.message, t, n, u, r), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const T0 = null;
function Lr(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function ja(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function to(e, t, n) {
  return e ? e.concat(t).map(function(r, i) {
    return r = ja(r), !n && i ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function O0(e) {
  return x.isArray(e) && !e.some(Lr);
}
const F0 = x.toFlatObject(x, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Xu(e, t, n) {
  if (!x.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = x.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, m) {
    return !x.isUndefined(m[g]);
  });
  const u = n.metaTokens, r = n.visitor || l, i = n.dots, o = n.indexes, s = (n.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(t);
  if (!x.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (x.isDate(d))
      return d.toISOString();
    if (!s && x.isBlob(d))
      throw new $("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(d) || x.isTypedArray(d) ? s && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, g, m) {
    let A = d;
    if (d && !m && typeof d == "object") {
      if (x.endsWith(g, "{}"))
        g = u ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (x.isArray(d) && O0(d) || (x.isFileList(d) || x.endsWith(g, "[]")) && (A = x.toArray(d)))
        return g = ja(g), A.forEach(function(w, v) {
          !(x.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? to([g], v, i) : o === null ? g : g + "[]",
            c(w)
          );
        }), !1;
    }
    return Lr(d) ? !0 : (t.append(to(m, g, i), c(d)), !1);
  }
  const f = [], h = Object.assign(F0, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: Lr
  });
  function b(d, g) {
    if (!x.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(d), x.forEach(d, function(A, _) {
        (!(x.isUndefined(A) || A === null) && r.call(
          t,
          A,
          x.isString(_) ? _.trim() : _,
          g,
          h
        )) === !0 && b(A, g ? g.concat(_) : [_]);
      }), f.pop();
    }
  }
  if (!x.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function no(e) {
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
function fi(e, t) {
  this._pairs = [], e && Xu(e, this, t);
}
const Ua = fi.prototype;
Ua.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ua.toString = function(t) {
  const n = t ? function(u) {
    return t.call(this, u, no);
  } : no;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function M0(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $a(e, t, n) {
  if (!t)
    return e;
  const u = n && n.encode || M0;
  x.isFunction(n) && (n = {
    serialize: n
  });
  const r = n && n.serialize;
  let i;
  if (r ? i = r(t, n) : i = x.isURLSearchParams(t) ? t.toString() : new fi(t, n).toString(u), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class uo {
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
    x.forEach(this.handlers, function(u) {
      u !== null && t(u);
    });
  }
}
const Ha = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, R0 = typeof URLSearchParams < "u" ? URLSearchParams : fi, N0 = typeof FormData < "u" ? FormData : null, I0 = typeof Blob < "u" ? Blob : null, P0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: R0,
    FormData: N0,
    Blob: I0
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, di = typeof window < "u" && typeof document < "u", Br = typeof navigator == "object" && navigator || void 0, L0 = di && (!Br || ["ReactNative", "NativeScript", "NS"].indexOf(Br.product) < 0), B0 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", z0 = di && window.location.href || "http://localhost", q0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: di,
  hasStandardBrowserEnv: L0,
  hasStandardBrowserWebWorkerEnv: B0,
  navigator: Br,
  origin: z0
}, Symbol.toStringTag, { value: "Module" })), ze = {
  ...q0,
  ...P0
};
function j0(e, t) {
  return Xu(e, new ze.classes.URLSearchParams(), Object.assign({
    visitor: function(n, u, r, i) {
      return ze.isNode && x.isBuffer(n) ? (this.append(u, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function U0(e) {
  return x.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function $0(e) {
  const t = {}, n = Object.keys(e);
  let u;
  const r = n.length;
  let i;
  for (u = 0; u < r; u++)
    i = n[u], t[i] = e[i];
  return t;
}
function Wa(e) {
  function t(n, u, r, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o), s = i >= n.length;
    return o = !o && x.isArray(r) ? r.length : o, s ? (x.hasOwnProp(r, o) ? r[o] = [r[o], u] : r[o] = u, !a) : ((!r[o] || !x.isObject(r[o])) && (r[o] = []), t(n, u, r[o], i) && x.isArray(r[o]) && (r[o] = $0(r[o])), !a);
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return x.forEachEntry(e, (u, r) => {
      t(U0(u), r, n, 0);
    }), n;
  }
  return null;
}
function H0(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (u) {
      if (u.name !== "SyntaxError")
        throw u;
    }
  return (n || JSON.stringify)(e);
}
const au = {
  transitional: Ha,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const u = n.getContentType() || "", r = u.indexOf("application/json") > -1, i = x.isObject(t);
    if (i && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t))
      return r ? JSON.stringify(Wa(t)) : t;
    if (x.isArrayBuffer(t) || x.isBuffer(t) || x.isStream(t) || x.isFile(t) || x.isBlob(t) || x.isReadableStream(t))
      return t;
    if (x.isArrayBufferView(t))
      return t.buffer;
    if (x.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (u.indexOf("application/x-www-form-urlencoded") > -1)
        return j0(t, this.formSerializer).toString();
      if ((a = x.isFileList(t)) || u.indexOf("multipart/form-data") > -1) {
        const s = this.env && this.env.FormData;
        return Xu(
          a ? { "files[]": t } : t,
          s && new s(),
          this.formSerializer
        );
      }
    }
    return i || r ? (n.setContentType("application/json", !1), H0(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || au.transitional, u = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (x.isResponse(t) || x.isReadableStream(t))
      return t;
    if (t && x.isString(t) && (u && !this.responseType || r)) {
      const o = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? $.from(a, $.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: ze.classes.FormData,
    Blob: ze.classes.Blob
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
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  au.headers[e] = {};
});
const W0 = x.toObjectSet([
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
]), G0 = (e) => {
  const t = {};
  let n, u, r;
  return e && e.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), n = o.substring(0, r).trim().toLowerCase(), u = o.substring(r + 1).trim(), !(!n || t[n] && W0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(u) : t[n] = [u] : t[n] = t[n] ? t[n] + ", " + u : u);
  }), t;
}, ro = Symbol("internals");
function zn(e) {
  return e && String(e).trim().toLowerCase();
}
function Eu(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(Eu) : String(e);
}
function V0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; u = n.exec(e); )
    t[u[1]] = u[2];
  return t;
}
const Z0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _r(e, t, n, u, r) {
  if (x.isFunction(u))
    return u.call(this, t, n);
  if (r && (t = n), !!x.isString(t)) {
    if (x.isString(u))
      return t.indexOf(u) !== -1;
    if (x.isRegExp(u))
      return u.test(t);
  }
}
function Y0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, u) => n.toUpperCase() + u);
}
function K0(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(e, u + n, {
      value: function(r, i, o) {
        return this[u].call(this, t, r, i, o);
      },
      configurable: !0
    });
  });
}
let Ze = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, u) {
    const r = this;
    function i(a, s, c) {
      const l = zn(s);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = x.findKey(r, l);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || s] = Eu(a));
    }
    const o = (a, s) => x.forEach(a, (c, l) => i(c, l, s));
    if (x.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (x.isString(t) && (t = t.trim()) && !Z0(t))
      o(G0(t), n);
    else if (x.isObject(t) && x.isIterable(t)) {
      let a = {}, s, c;
      for (const l of t) {
        if (!x.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        a[c = l[0]] = (s = a[c]) ? x.isArray(s) ? [...s, l[1]] : [s, l[1]] : l[1];
      }
      o(a, n);
    } else
      t != null && i(n, t, u);
    return this;
  }
  get(t, n) {
    if (t = zn(t), t) {
      const u = x.findKey(this, t);
      if (u) {
        const r = this[u];
        if (!n)
          return r;
        if (n === !0)
          return V0(r);
        if (x.isFunction(n))
          return n.call(this, r, u);
        if (x.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = zn(t), t) {
      const u = x.findKey(this, t);
      return !!(u && this[u] !== void 0 && (!n || _r(this, this[u], u, n)));
    }
    return !1;
  }
  delete(t, n) {
    const u = this;
    let r = !1;
    function i(o) {
      if (o = zn(o), o) {
        const a = x.findKey(u, o);
        a && (!n || _r(u, u[a], a, n)) && (delete u[a], r = !0);
      }
    }
    return x.isArray(t) ? t.forEach(i) : i(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let u = n.length, r = !1;
    for (; u--; ) {
      const i = n[u];
      (!t || _r(this, this[i], i, t, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, u = {};
    return x.forEach(this, (r, i) => {
      const o = x.findKey(u, i);
      if (o) {
        n[o] = Eu(r), delete n[i];
        return;
      }
      const a = t ? Y0(i) : String(i).trim();
      a !== i && delete n[i], n[a] = Eu(r), u[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (u, r) => {
      u != null && u !== !1 && (n[r] = t && x.isArray(u) ? u.join(", ") : u);
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
    const u = (this[ro] = this[ro] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const a = zn(o);
      u[a] || (K0(r, o), u[a] = !0);
    }
    return x.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Ze.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(Ze.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(u) {
      this[n] = u;
    }
  };
});
x.freezeMethods(Ze);
function xr(e, t) {
  const n = this || au, u = t || n, r = Ze.from(u.headers);
  let i = u.data;
  return x.forEach(e, function(a) {
    i = a.call(n, i, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), i;
}
function Ga(e) {
  return !!(e && e.__CANCEL__);
}
function On(e, t, n) {
  $.call(this, e ?? "canceled", $.ERR_CANCELED, t, n), this.name = "CanceledError";
}
x.inherits(On, $, {
  __CANCEL__: !0
});
function Va(e, t, n) {
  const u = n.config.validateStatus;
  !n.status || !u || u(n.status) ? e(n) : t(new $(
    "Request failed with status code " + n.status,
    [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function X0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function J0(e, t) {
  e = e || 10;
  const n = new Array(e), u = new Array(e);
  let r = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(s) {
    const c = Date.now(), l = u[i];
    o || (o = c), n[r] = s, u[r] = c;
    let f = i, h = 0;
    for (; f !== r; )
      h += n[f++], f = f % e;
    if (r = (r + 1) % e, r === i && (i = (i + 1) % e), c - o < t)
      return;
    const b = l && c - l;
    return b ? Math.round(h * 1e3 / b) : void 0;
  };
}
function Q0(e, t) {
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
const Nu = (e, t, n = 3) => {
  let u = 0;
  const r = J0(50, 250);
  return Q0((i) => {
    const o = i.loaded, a = i.lengthComputable ? i.total : void 0, s = o - u, c = r(s), l = o <= a;
    u = o;
    const f = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: s,
      rate: c || void 0,
      estimated: c && a && l ? (a - o) / c : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, io = (e, t) => {
  const n = e != null;
  return [(u) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: u
  }), t[1]];
}, oo = (e) => (...t) => x.asap(() => e(...t)), ef = ze.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, ze.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(ze.origin),
  ze.navigator && /(msie|trident)/i.test(ze.navigator.userAgent)
) : () => !0, tf = ze.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, u, r, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      x.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), x.isString(u) && o.push("path=" + u), x.isString(r) && o.push("domain=" + r), i === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function uf(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Za(e, t, n) {
  let u = !nf(t);
  return e && (u || n == !1) ? uf(e, t) : t;
}
const ao = (e) => e instanceof Ze ? { ...e } : e;
function sn(e, t) {
  t = t || {};
  const n = {};
  function u(c, l, f, h) {
    return x.isPlainObject(c) && x.isPlainObject(l) ? x.merge.call({ caseless: h }, c, l) : x.isPlainObject(l) ? x.merge({}, l) : x.isArray(l) ? l.slice() : l;
  }
  function r(c, l, f, h) {
    if (x.isUndefined(l)) {
      if (!x.isUndefined(c))
        return u(void 0, c, f, h);
    } else return u(c, l, f, h);
  }
  function i(c, l) {
    if (!x.isUndefined(l))
      return u(void 0, l);
  }
  function o(c, l) {
    if (x.isUndefined(l)) {
      if (!x.isUndefined(c))
        return u(void 0, c);
    } else return u(void 0, l);
  }
  function a(c, l, f) {
    if (f in t)
      return u(c, l);
    if (f in e)
      return u(void 0, c);
  }
  const s = {
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
    validateStatus: a,
    headers: (c, l, f) => r(ao(c), ao(l), f, !0)
  };
  return x.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = s[l] || r, h = f(e[l], t[l], l);
    x.isUndefined(h) && f !== a || (n[l] = h);
  }), n;
}
const Ya = (e) => {
  const t = sn({}, e);
  let { data: n, withXSRFToken: u, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: a } = t;
  t.headers = o = Ze.from(o), t.url = $a(Za(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && o.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let s;
  if (x.isFormData(n)) {
    if (ze.hasStandardBrowserEnv || ze.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((s = o.getContentType()) !== !1) {
      const [c, ...l] = s ? s.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (ze.hasStandardBrowserEnv && (u && x.isFunction(u) && (u = u(t)), u || u !== !1 && ef(t.url))) {
    const c = r && i && tf.read(i);
    c && o.set(r, c);
  }
  return t;
}, rf = typeof XMLHttpRequest < "u", of = rf && function(e) {
  return new Promise(function(n, u) {
    const r = Ya(e);
    let i = r.data;
    const o = Ze.from(r.headers).normalize();
    let { responseType: a, onUploadProgress: s, onDownloadProgress: c } = r, l, f, h, b, d;
    function g() {
      b && b(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout;
    function A() {
      if (!m)
        return;
      const w = Ze.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), k = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: w,
        config: e,
        request: m
      };
      Va(function(O) {
        n(O), g();
      }, function(O) {
        u(O), g();
      }, k), m = null;
    }
    "onloadend" in m ? m.onloadend = A : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, m.onabort = function() {
      m && (u(new $("Request aborted", $.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      u(new $("Network Error", $.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let v = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const k = r.transitional || Ha;
      r.timeoutErrorMessage && (v = r.timeoutErrorMessage), u(new $(
        v,
        k.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
        e,
        m
      )), m = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in m && x.forEach(o.toJSON(), function(v, k) {
      m.setRequestHeader(k, v);
    }), x.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), a && a !== "json" && (m.responseType = r.responseType), c && ([h, d] = Nu(c, !0), m.addEventListener("progress", h)), s && m.upload && ([f, b] = Nu(s), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", b)), (r.cancelToken || r.signal) && (l = (w) => {
      m && (u(!w || w.type ? new On(null, e, m) : w), m.abort(), m = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const _ = X0(r.url);
    if (_ && ze.protocols.indexOf(_) === -1) {
      u(new $("Unsupported protocol " + _ + ":", $.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(i || null);
  });
}, af = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let u = new AbortController(), r;
    const i = function(c) {
      if (!r) {
        r = !0, a();
        const l = c instanceof Error ? c : this.reason;
        u.abort(l instanceof $ ? l : new On(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new $(`timeout ${t} of ms exceeded`, $.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", i));
    const { signal: s } = u;
    return s.unsubscribe = () => x.asap(a), s;
  }
}, sf = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let u = 0, r;
  for (; u < n; )
    r = u + t, yield e.slice(u, r), u = r;
}, cf = async function* (e, t) {
  for await (const n of lf(e))
    yield* sf(n, t);
}, lf = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: u } = await t.read();
      if (n)
        break;
      yield u;
    }
  } finally {
    await t.cancel();
  }
}, so = (e, t, n, u) => {
  const r = cf(e, t);
  let i = 0, o, a = (s) => {
    o || (o = !0, u && u(s));
  };
  return new ReadableStream({
    async pull(s) {
      try {
        const { done: c, value: l } = await r.next();
        if (c) {
          a(), s.close();
          return;
        }
        let f = l.byteLength;
        if (n) {
          let h = i += f;
          n(h);
        }
        s.enqueue(new Uint8Array(l));
      } catch (c) {
        throw a(c), c;
      }
    },
    cancel(s) {
      return a(s), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, Ju = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ka = Ju && typeof ReadableStream == "function", ff = Ju && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Xa = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, df = Ka && Xa(() => {
  let e = !1;
  const t = new Request(ze.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), co = 64 * 1024, zr = Ka && Xa(() => x.isReadableStream(new Response("").body)), Iu = {
  stream: zr && ((e) => e.body)
};
Ju && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Iu[t] && (Iu[t] = x.isFunction(e[t]) ? (n) => n[t]() : (n, u) => {
      throw new $(`Response type '${t}' is not supported`, $.ERR_NOT_SUPPORT, u);
    });
  });
})(new Response());
const hf = async (e) => {
  if (e == null)
    return 0;
  if (x.isBlob(e))
    return e.size;
  if (x.isSpecCompliantForm(e))
    return (await new Request(ze.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (x.isArrayBufferView(e) || x.isArrayBuffer(e))
    return e.byteLength;
  if (x.isURLSearchParams(e) && (e = e + ""), x.isString(e))
    return (await ff(e)).byteLength;
}, bf = async (e, t) => {
  const n = x.toFiniteNumber(e.getContentLength());
  return n ?? hf(t);
}, pf = Ju && (async (e) => {
  let {
    url: t,
    method: n,
    data: u,
    signal: r,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: a,
    onUploadProgress: s,
    responseType: c,
    headers: l,
    withCredentials: f = "same-origin",
    fetchOptions: h
  } = Ya(e);
  c = c ? (c + "").toLowerCase() : "text";
  let b = af([r, i && i.toAbortSignal()], o), d;
  const g = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let m;
  try {
    if (s && df && n !== "get" && n !== "head" && (m = await bf(l, u)) !== 0) {
      let k = new Request(t, {
        method: "POST",
        body: u,
        duplex: "half"
      }), y;
      if (x.isFormData(u) && (y = k.headers.get("content-type")) && l.setContentType(y), k.body) {
        const [O, P] = io(
          m,
          Nu(oo(s))
        );
        u = so(k.body, co, O, P);
      }
    }
    x.isString(f) || (f = f ? "include" : "omit");
    const A = "credentials" in Request.prototype;
    d = new Request(t, {
      ...h,
      signal: b,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: u,
      duplex: "half",
      credentials: A ? f : void 0
    });
    let _ = await fetch(d);
    const w = zr && (c === "stream" || c === "response");
    if (zr && (a || w && g)) {
      const k = {};
      ["status", "statusText", "headers"].forEach((H) => {
        k[H] = _[H];
      });
      const y = x.toFiniteNumber(_.headers.get("content-length")), [O, P] = a && io(
        y,
        Nu(oo(a), !0)
      ) || [];
      _ = new Response(
        so(_.body, co, O, () => {
          P && P(), g && g();
        }),
        k
      );
    }
    c = c || "text";
    let v = await Iu[x.findKey(Iu, c) || "text"](_, e);
    return !w && g && g(), await new Promise((k, y) => {
      Va(k, y, {
        data: v,
        headers: Ze.from(_.headers),
        status: _.status,
        statusText: _.statusText,
        config: e,
        request: d
      });
    });
  } catch (A) {
    throw g && g(), A && A.name === "TypeError" && /Load failed|fetch/i.test(A.message) ? Object.assign(
      new $("Network Error", $.ERR_NETWORK, e, d),
      {
        cause: A.cause || A
      }
    ) : $.from(A, A && A.code, e, d);
  }
}), qr = {
  http: T0,
  xhr: of,
  fetch: pf
};
x.forEach(qr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const lo = (e) => `- ${e}`, mf = (e) => x.isFunction(e) || e === null || e === !1, Ja = {
  getAdapter: (e) => {
    e = x.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, u;
    const r = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let o;
      if (u = n, !mf(n) && (u = qr[(o = String(n)).toLowerCase()], u === void 0))
        throw new $(`Unknown adapter '${o}'`);
      if (u)
        break;
      r[o || "#" + i] = u;
    }
    if (!u) {
      const i = Object.entries(r).map(
        ([a, s]) => `adapter ${a} ` + (s === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(lo).join(`
`) : " " + lo(i[0]) : "as no adapter specified";
      throw new $(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return u;
  },
  adapters: qr
};
function vr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new On(null, e);
}
function fo(e) {
  return vr(e), e.headers = Ze.from(e.headers), e.data = xr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ja.getAdapter(e.adapter || au.adapter)(e).then(function(u) {
    return vr(e), u.data = xr.call(
      e,
      e.transformResponse,
      u
    ), u.headers = Ze.from(u.headers), u;
  }, function(u) {
    return Ga(u) || (vr(e), u && u.response && (u.response.data = xr.call(
      e,
      e.transformResponse,
      u.response
    ), u.response.headers = Ze.from(u.response.headers))), Promise.reject(u);
  });
}
const Qa = "1.9.0", Qu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Qu[e] = function(u) {
    return typeof u === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ho = {};
Qu.transitional = function(t, n, u) {
  function r(i, o) {
    return "[Axios v" + Qa + "] Transitional option '" + i + "'" + o + (u ? ". " + u : "");
  }
  return (i, o, a) => {
    if (t === !1)
      throw new $(
        r(o, " has been removed" + (n ? " in " + n : "")),
        $.ERR_DEPRECATED
      );
    return n && !ho[o] && (ho[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, a) : !0;
  };
};
Qu.spelling = function(t) {
  return (n, u) => (console.warn(`${u} is likely a misspelling of ${t}`), !0);
};
function gf(e, t, n) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(e);
  let r = u.length;
  for (; r-- > 0; ) {
    const i = u[r], o = t[i];
    if (o) {
      const a = e[i], s = a === void 0 || o(a, i, e);
      if (s !== !0)
        throw new $("option " + i + " must be " + s, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new $("Unknown option " + i, $.ERR_BAD_OPTION);
  }
}
const Cu = {
  assertOptions: gf,
  validators: Qu
}, xt = Cu.validators;
let on = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new uo(),
      response: new uo()
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
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (u) {
      if (u instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          u.stack ? i && !String(u.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (u.stack += `
` + i) : u.stack = i;
        } catch {
        }
      }
      throw u;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = sn(this.defaults, n);
    const { transitional: u, paramsSerializer: r, headers: i } = n;
    u !== void 0 && Cu.assertOptions(u, {
      silentJSONParsing: xt.transitional(xt.boolean),
      forcedJSONParsing: xt.transitional(xt.boolean),
      clarifyTimeoutError: xt.transitional(xt.boolean)
    }, !1), r != null && (x.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : Cu.assertOptions(r, {
      encode: xt.function,
      serialize: xt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Cu.assertOptions(n, {
      baseUrl: xt.spelling("baseURL"),
      withXsrfToken: xt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && x.merge(
      i.common,
      i[n.method]
    );
    i && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), n.headers = Ze.concat(o, i);
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (s = s && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let l, f = 0, h;
    if (!s) {
      const d = [fo.bind(this), void 0];
      for (d.unshift.apply(d, a), d.push.apply(d, c), h = d.length, l = Promise.resolve(n); f < h; )
        l = l.then(d[f++], d[f++]);
      return l;
    }
    h = a.length;
    let b = n;
    for (f = 0; f < h; ) {
      const d = a[f++], g = a[f++];
      try {
        b = d(b);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      l = fo.call(this, b);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = c.length; f < h; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = sn(this.defaults, t);
    const n = Za(t.baseURL, t.url, t.allowAbsoluteUrls);
    return $a(n, t.params, t.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function(t) {
  on.prototype[t] = function(n, u) {
    return this.request(sn(u || {}, {
      method: t,
      url: n,
      data: (u || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(t) {
  function n(u) {
    return function(i, o, a) {
      return this.request(sn(a || {}, {
        method: t,
        headers: u ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  on.prototype[t] = n(), on.prototype[t + "Form"] = n(!0);
});
let _f = class es {
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
      const o = new Promise((a) => {
        u.subscribe(a), i = a;
      }).then(r);
      return o.cancel = function() {
        u.unsubscribe(i);
      }, o;
    }, t(function(i, o, a) {
      u.reason || (u.reason = new On(i, o, a), n(u.reason));
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
      token: new es(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function xf(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function vf(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const jr = {
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
Object.entries(jr).forEach(([e, t]) => {
  jr[t] = e;
});
function ts(e) {
  const t = new on(e), n = Fa(on.prototype.request, t);
  return x.extend(n, on.prototype, t, { allOwnKeys: !0 }), x.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return ts(sn(e, r));
  }, n;
}
const me = ts(au);
me.Axios = on;
me.CanceledError = On;
me.CancelToken = _f;
me.isCancel = Ga;
me.VERSION = Qa;
me.toFormData = Xu;
me.AxiosError = $;
me.Cancel = me.CanceledError;
me.all = function(t) {
  return Promise.all(t);
};
me.spread = xf;
me.isAxiosError = vf;
me.mergeConfig = sn;
me.AxiosHeaders = Ze;
me.formToJSON = (e) => Wa(x.isHTMLForm(e) ? new FormData(e) : e);
me.getAdapter = Ja.getAdapter;
me.HttpStatusCode = jr;
me.default = me;
const {
  Axios: Zp,
  AxiosError: Yp,
  CanceledError: Kp,
  isCancel: Xp,
  CancelToken: Jp,
  VERSION: Qp,
  all: e2,
  Cancel: t2,
  isAxiosError: n2,
  spread: u2,
  toFormData: r2,
  AxiosHeaders: i2,
  HttpStatusCode: o2,
  formToJSON: a2,
  getAdapter: s2,
  mergeConfig: c2
} = me, yf = me.create({
  baseURL: "https://beta.fluentbot.ai",
  headers: {
    "Content-Type": "application/json"
  }
}), Ur = me.create({
  baseURL: "https://beta.fluentbot.ai/ai",
  headers: {
    "Content-Type": "application/json"
  }
}), ns = {
  messages: [],
  isLoading: !1,
  conversation_id: null,
  error: null,
  hasMore: !0,
  nextCursor: null
}, We = Rl(ns), kf = () => We.set(ns), wf = async (e, t) => {
  const n = t.bot_id;
  if (!n)
    throw new Error("Bot ID is required");
  let u = "";
  We.update((r) => ({
    ...r,
    messages: [
      ...r.messages,
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
    const r = {
      bot_id: n,
      prompt: e,
      stream: !0,
      source: "widget",
      conversation_id: Oa(We).conversation_id,
      cache: !0,
      page_url: window.location.href
    }, o = await fetch("https://beta.fluentbot.ai/ai/chat/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream",
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(r)
    });
    if (!o.ok || !o.body)
      throw new Error(`Request failed: ${o.status} ${o.statusText}`);
    const a = o.body.getReader(), s = new TextDecoder();
    let c = "", l = "", f = [];
    const h = () => {
      if (!l && f.length === 0) return;
      const b = f.join(`
`), d = l || "message";
      if (d === "message")
        b && b.length > 0 && (u += b, We.update((g) => ({
          ...g,
          messages: g.messages.map((m) => m.isStreaming ? { ...m, content: u } : m)
        })));
      else if (d === "sources")
        try {
          const g = JSON.parse(b);
          Array.isArray(g) && We.update((m) => ({
            ...m,
            messages: m.messages.map((A) => A.isStreaming ? { ...A, sources: g } : A)
          }));
        } catch {
        }
      else if (d === "conversation_id") {
        const g = b.trim();
        localStorage.setItem("conversation_id", g), We.update((m) => ({
          ...m,
          conversation_id: g
        }));
      } else if (d === "response_id")
        try {
          const g = parseInt(b.trim(), 10);
          isNaN(g) || We.update((m) => ({
            ...m,
            messages: m.messages.map((A) => A.isStreaming ? { ...A, id: g } : A)
          }));
        } catch {
        }
      l = "", f = [];
    };
    for (; ; ) {
      const { value: b, done: d } = await a.read();
      if (d) break;
      c += s.decode(b, { stream: !0 });
      const g = c.split(/\r?\n/);
      c = g.pop() ?? "";
      for (const m of g)
        m.startsWith("event:") ? (h(), l = m.slice(6).trim()) : m.startsWith("data:") ? f.push(m.slice(5)) : m.trim() === "" && h();
    }
    if (c.length > 0) {
      const b = c.trimEnd();
      if (b) {
        const d = b.split(/\r?\n/);
        for (const g of d)
          g.startsWith("event:") ? (h(), l = g.slice(6).trim()) : g.startsWith("data:") && f.push(g.slice(5));
      }
    }
    h(), We.update((b) => {
      const d = b.messages.find((m) => m.isStreaming);
      if (!d)
        return { ...b, isLoading: !1 };
      const g = {
        id: d.id,
        role: "ai",
        content: u,
        timestamp: /* @__PURE__ */ new Date(),
        sources: d.sources || void 0
      };
      return {
        ...b,
        messages: b.messages.map((m) => m.isStreaming ? g : m),
        isLoading: !1
      };
    });
  } catch (r) {
    throw console.error("Error sending message:", r), We.update((i) => ({
      ...i,
      isLoading: !1
    })), r;
  }
}, us = async (e, t = 20, n = null) => {
  try {
    const u = { limit: t };
    n != null && (u.cursor = n);
    const r = await Ur.get(`/chat/${e}/messages`, { params: u }), i = r.data.messages, o = r.data?.meta ?? {};
    let a = null;
    if (o?.next_cursor != null) {
      const s = Number(o.next_cursor);
      a = Number.isFinite(s) && !Number.isNaN(s) ? s : null;
    }
    We.update((s) => ({
      ...s,
      messages: n ? [...i, ...s.messages] : i,
      hasMore: !!o?.has_more,
      nextCursor: a,
      conversation_id: e
    })), localStorage.setItem("conversation_id", e);
  } catch (u) {
    console.error("Error loading chat history:", u), We.update((r) => ({
      ...r,
      error: "Failed to load chat history"
    }));
  }
};
Mc();
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
var Cf = /* @__PURE__ */ gl("<svg><!><!></svg>");
function Ue(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), u = Fe(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  An(t, !1);
  let r = Qt(t, "name", 8, void 0), i = Qt(t, "color", 8, "currentColor"), o = Qt(t, "size", 8, 24), a = Qt(t, "strokeWidth", 8, 2), s = Qt(t, "absoluteStrokeWidth", 8, !1), c = Qt(t, "iconNode", 24, () => []);
  const l = (...g) => g.filter((m, A, _) => !!m && _.indexOf(m) === A).join(" ");
  Ml();
  var f = Cf();
  let h;
  var b = W(f);
  Ru(b, 1, c, si, (g, m) => {
    let A = () => C(m)[0], _ = () => C(m)[1];
    var w = Me(), v = ye(w);
    Al(v, A, !0, (k, y) => {
      let O;
      pe(() => O = Yi(k, O, { ..._() }));
    }), q(g, w);
  });
  var d = de(b);
  Ne(d, t, "default", {}), pe(
    (g, m) => h = Yi(f, h, {
      ...Ef,
      ...u,
      width: o(),
      height: o(),
      stroke: i(),
      "stroke-width": g,
      class: m
    }),
    [
      () => s() ? Number(a()) * 24 / Number(o()) : a(),
      () => l("lucide-icon", "lucide", r() ? `lucide-${r()}` : "", n.class)
    ],
    ei
  ), q(e, f), Dn();
}
function rs(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "bot-message-square" }, () => n, {
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
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function $r(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "bot" }, () => n, {
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
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Af(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "maximize" }, () => n, {
    iconNode: [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
      ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
      ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]
    ],
    children: (r, i) => {
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Df(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "message-circle-more" }, () => n, {
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
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Sf(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "message-circle" }, () => n, {
    iconNode: [
      [
        "path",
        { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }
      ]
    ],
    children: (r, i) => {
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Tf(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "message-square-more" }, () => n, {
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
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Of(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "messages-square" }, () => n, {
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
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function bo(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "message-square" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ff(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "minimize" }, () => n, {
    iconNode: [
      ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }],
      ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }],
      ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]
    ],
    children: (r, i) => {
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Mf(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "send" }, () => n, {
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
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function is(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "sparkle" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function os(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "sparkles" }, () => n, {
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
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Rf(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "thumbs-down" }, () => n, {
    iconNode: [
      ["path", { d: "M17 14V2" }],
      [
        "path",
        {
          d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Nf(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "thumbs-up" }, () => n, {
    iconNode: [
      ["path", { d: "M7 10v12" }],
      [
        "path",
        {
          d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function If(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "trash-2" }, () => n, {
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
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function as(e, t) {
  const n = Fe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ue(e, je({ name: "x" }, () => n, {
    iconNode: [
      ["path", { d: "M18 6 6 18" }],
      ["path", { d: "m6 6 12 12" }]
    ],
    children: (r, i) => {
      var o = Me(), a = ye(o);
      Ne(a, t, "default", {}), q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
const po = {};
function Pf(e) {
  let t = po[e];
  if (t)
    return t;
  t = po[e] = [];
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
function kn(e, t) {
  typeof t != "string" && (t = kn.defaultChars);
  const n = Pf(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(u) {
    let r = "";
    for (let i = 0, o = u.length; i < o; i += 3) {
      const a = parseInt(u.slice(i + 1, i + 3), 16);
      if (a < 128) {
        r += n[a];
        continue;
      }
      if ((a & 224) === 192 && i + 3 < o) {
        const s = parseInt(u.slice(i + 4, i + 6), 16);
        if ((s & 192) === 128) {
          const c = a << 6 & 1984 | s & 63;
          c < 128 ? r += "��" : r += String.fromCharCode(c), i += 3;
          continue;
        }
      }
      if ((a & 240) === 224 && i + 6 < o) {
        const s = parseInt(u.slice(i + 4, i + 6), 16), c = parseInt(u.slice(i + 7, i + 9), 16);
        if ((s & 192) === 128 && (c & 192) === 128) {
          const l = a << 12 & 61440 | s << 6 & 4032 | c & 63;
          l < 2048 || l >= 55296 && l <= 57343 ? r += "���" : r += String.fromCharCode(l), i += 6;
          continue;
        }
      }
      if ((a & 248) === 240 && i + 9 < o) {
        const s = parseInt(u.slice(i + 4, i + 6), 16), c = parseInt(u.slice(i + 7, i + 9), 16), l = parseInt(u.slice(i + 10, i + 12), 16);
        if ((s & 192) === 128 && (c & 192) === 128 && (l & 192) === 128) {
          let f = a << 18 & 1835008 | s << 12 & 258048 | c << 6 & 4032 | l & 63;
          f < 65536 || f > 1114111 ? r += "����" : (f -= 65536, r += String.fromCharCode(55296 + (f >> 10), 56320 + (f & 1023))), i += 9;
          continue;
        }
      }
      r += "�";
    }
    return r;
  });
}
kn.defaultChars = ";/?:@&=+$,#";
kn.componentChars = "";
const mo = {};
function Lf(e) {
  let t = mo[e];
  if (t)
    return t;
  t = mo[e] = [];
  for (let n = 0; n < 128; n++) {
    const u = String.fromCharCode(n);
    /^[0-9a-z]$/i.test(u) ? t.push(u) : t.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
  }
  for (let n = 0; n < e.length; n++)
    t[e.charCodeAt(n)] = e[n];
  return t;
}
function su(e, t, n) {
  typeof t != "string" && (n = t, t = su.defaultChars), typeof n > "u" && (n = !0);
  const u = Lf(t);
  let r = "";
  for (let i = 0, o = e.length; i < o; i++) {
    const a = e.charCodeAt(i);
    if (n && a === 37 && i + 2 < o && /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3))) {
      r += e.slice(i, i + 3), i += 2;
      continue;
    }
    if (a < 128) {
      r += u[a];
      continue;
    }
    if (a >= 55296 && a <= 57343) {
      if (a >= 55296 && a <= 56319 && i + 1 < o) {
        const s = e.charCodeAt(i + 1);
        if (s >= 56320 && s <= 57343) {
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
su.defaultChars = ";/?:@&=+$,-_.!~*'()#";
su.componentChars = "-_.!~*'()";
function hi(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function Pu() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Bf = /^([a-z0-9.+-]+:)/i, zf = /:[0-9]*$/, qf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, jf = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Uf = ["{", "}", "|", "\\", "^", "`"].concat(jf), $f = ["'"].concat(Uf), go = ["%", "/", "?", ";", "#"].concat($f), _o = ["/", "?", "#"], Hf = 255, xo = /^[+a-z0-9A-Z_-]{0,63}$/, Wf = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, vo = {
  javascript: !0,
  "javascript:": !0
}, yo = {
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
function bi(e, t) {
  if (e && e instanceof Pu) return e;
  const n = new Pu();
  return n.parse(e, t), n;
}
Pu.prototype.parse = function(e, t) {
  let n, u, r, i = e;
  if (i = i.trim(), !t && e.split("#").length === 1) {
    const c = qf.exec(i);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let o = Bf.exec(i);
  if (o && (o = o[0], n = o.toLowerCase(), this.protocol = o, i = i.substr(o.length)), (t || o || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = i.substr(0, 2) === "//", r && !(o && vo[o]) && (i = i.substr(2), this.slashes = !0)), !vo[o] && (r || o && !yo[o])) {
    let c = -1;
    for (let d = 0; d < _o.length; d++)
      u = i.indexOf(_o[d]), u !== -1 && (c === -1 || u < c) && (c = u);
    let l, f;
    c === -1 ? f = i.lastIndexOf("@") : f = i.lastIndexOf("@", c), f !== -1 && (l = i.slice(0, f), i = i.slice(f + 1), this.auth = l), c = -1;
    for (let d = 0; d < go.length; d++)
      u = i.indexOf(go[d]), u !== -1 && (c === -1 || u < c) && (c = u);
    c === -1 && (c = i.length), i[c - 1] === ":" && c--;
    const h = i.slice(0, c);
    i = i.slice(c), this.parseHost(h), this.hostname = this.hostname || "";
    const b = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!b) {
      const d = this.hostname.split(/\./);
      for (let g = 0, m = d.length; g < m; g++) {
        const A = d[g];
        if (A && !A.match(xo)) {
          let _ = "";
          for (let w = 0, v = A.length; w < v; w++)
            A.charCodeAt(w) > 127 ? _ += "x" : _ += A[w];
          if (!_.match(xo)) {
            const w = d.slice(0, g), v = d.slice(g + 1), k = A.match(Wf);
            k && (w.push(k[1]), v.unshift(k[2])), v.length && (i = v.join(".") + i), this.hostname = w.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Hf && (this.hostname = ""), b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const a = i.indexOf("#");
  a !== -1 && (this.hash = i.substr(a), i = i.slice(0, a));
  const s = i.indexOf("?");
  return s !== -1 && (this.search = i.substr(s), i = i.slice(0, s)), i && (this.pathname = i), yo[n] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Pu.prototype.parseHost = function(e) {
  let t = zf.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: kn,
  encode: su,
  format: hi,
  parse: bi
}, Symbol.toStringTag, { value: "Module" })), ss = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, cs = /[\0-\x1F\x7F-\x9F]/, Vf = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, pi = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, ls = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, fs = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: ss,
  Cc: cs,
  Cf: Vf,
  P: pi,
  S: ls,
  Z: fs
}, Symbol.toStringTag, { value: "Module" })), Yf = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Kf = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var yr;
const Xf = /* @__PURE__ */ new Map([
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
  (yr = String.fromCodePoint) !== null && yr !== void 0 ? yr : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Qf(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Xf.get(e)) !== null && t !== void 0 ? t : e;
}
var Oe;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(Oe || (Oe = {}));
const ed = 32;
var $t;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})($t || ($t = {}));
function Hr(e) {
  return e >= Oe.ZERO && e <= Oe.NINE;
}
function td(e) {
  return e >= Oe.UPPER_A && e <= Oe.UPPER_F || e >= Oe.LOWER_A && e <= Oe.LOWER_F;
}
function nd(e) {
  return e >= Oe.UPPER_A && e <= Oe.UPPER_Z || e >= Oe.LOWER_A && e <= Oe.LOWER_Z || Hr(e);
}
function ud(e) {
  return e === Oe.EQUALS || nd(e);
}
var Te;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(Te || (Te = {}));
var jt;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(jt || (jt = {}));
class rd {
  constructor(t, n, u) {
    this.decodeTree = t, this.emitCodePoint = n, this.errors = u, this.state = Te.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = jt.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = Te.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
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
      case Te.EntityStart:
        return t.charCodeAt(n) === Oe.NUM ? (this.state = Te.NumericStart, this.consumed += 1, this.stateNumericStart(t, n + 1)) : (this.state = Te.NamedEntity, this.stateNamedEntity(t, n));
      case Te.NumericStart:
        return this.stateNumericStart(t, n);
      case Te.NumericDecimal:
        return this.stateNumericDecimal(t, n);
      case Te.NumericHex:
        return this.stateNumericHex(t, n);
      case Te.NamedEntity:
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
    return n >= t.length ? -1 : (t.charCodeAt(n) | ed) === Oe.LOWER_X ? (this.state = Te.NumericHex, this.consumed += 1, this.stateNumericHex(t, n + 1)) : (this.state = Te.NumericDecimal, this.stateNumericDecimal(t, n));
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
      if (Hr(r) || td(r))
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
      if (Hr(r))
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
    if (t === Oe.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === jt.Strict)
      return 0;
    return this.emitCodePoint(Qf(this.result), this.consumed), this.errors && (t !== Oe.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
    let r = u[this.treeIndex], i = (r & $t.VALUE_LENGTH) >> 14;
    for (; n < t.length; n++, this.excess++) {
      const o = t.charCodeAt(n);
      if (this.treeIndex = id(u, r, this.treeIndex + Math.max(1, i), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === jt.Attribute && // We shouldn't have consumed any characters after the entity,
        (i === 0 || // And there should be no invalid characters.
        ud(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = u[this.treeIndex], i = (r & $t.VALUE_LENGTH) >> 14, i !== 0) {
        if (o === Oe.SEMI)
          return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
        this.decodeMode !== jt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
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
    const { result: n, decodeTree: u } = this, r = (u[n] & $t.VALUE_LENGTH) >> 14;
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
    return this.emitCodePoint(n === 1 ? r[t] & ~$t.VALUE_LENGTH : r[t + 1], u), n === 3 && this.emitCodePoint(r[t + 2], u), u;
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
      case Te.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== jt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case Te.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case Te.NumericHex:
        return this.emitNumericEntity(0, 3);
      case Te.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case Te.EntityStart:
        return 0;
    }
  }
}
function ds(e) {
  let t = "";
  const n = new rd(e, (u) => t += Jf(u));
  return function(r, i) {
    let o = 0, a = 0;
    for (; (a = r.indexOf("&", a)) >= 0; ) {
      t += r.slice(o, a), n.startEntity(i);
      const c = n.write(
        r,
        // Skip the "&"
        a + 1
      );
      if (c < 0) {
        o = a + n.end();
        break;
      }
      o = a + c, a = c === 0 ? o + 1 : o;
    }
    const s = t + r.slice(o);
    return t = "", s;
  };
}
function id(e, t, n, u) {
  const r = (t & $t.BRANCH_LENGTH) >> 7, i = t & $t.JUMP_TABLE;
  if (r === 0)
    return i !== 0 && u === i ? n : -1;
  if (i) {
    const s = u - i;
    return s < 0 || s >= r ? -1 : e[n + s] - 1;
  }
  let o = n, a = o + r - 1;
  for (; o <= a; ) {
    const s = o + a >>> 1, c = e[s];
    if (c < u)
      o = s + 1;
    else if (c > u)
      a = s - 1;
    else
      return e[s + r];
  }
  return -1;
}
const od = ds(Yf);
ds(Kf);
function hs(e, t = jt.Legacy) {
  return od(e, t);
}
function ad(e) {
  return Object.prototype.toString.call(e);
}
function mi(e) {
  return ad(e) === "[object String]";
}
const sd = Object.prototype.hasOwnProperty;
function cd(e, t) {
  return sd.call(e, t);
}
function er(e) {
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
function bs(e, t, n) {
  return [].concat(e.slice(0, t), n, e.slice(t + 1));
}
function gi(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function Lu(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), n = 56320 + (e & 1023);
    return String.fromCharCode(t, n);
  }
  return String.fromCharCode(e);
}
const ps = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, ld = /&([a-z#][a-z0-9]{1,31});/gi, fd = new RegExp(ps.source + "|" + ld.source, "gi"), dd = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function hd(e, t) {
  if (t.charCodeAt(0) === 35 && dd.test(t)) {
    const u = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return gi(u) ? Lu(u) : e;
  }
  const n = hs(e);
  return n !== e ? n : e;
}
function bd(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(ps, "$1");
}
function wn(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(fd, function(t, n, u) {
    return n || hd(t, u);
  });
}
const pd = /[&<>"]/, md = /[&<>"]/g, gd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function _d(e) {
  return gd[e];
}
function Zt(e) {
  return pd.test(e) ? e.replace(md, _d) : e;
}
const xd = /[.?*+^$[\]\\(){}|-]/g;
function vd(e) {
  return e.replace(xd, "\\$&");
}
function se(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function Zn(e) {
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
function Yn(e) {
  return pi.test(e) || ls.test(e);
}
function Kn(e) {
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
function tr(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const yd = { mdurl: Gf, ucmicro: Zf }, kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: bs,
  assign: er,
  escapeHtml: Zt,
  escapeRE: vd,
  fromCodePoint: Lu,
  has: cd,
  isMdAsciiPunct: Kn,
  isPunctChar: Yn,
  isSpace: se,
  isString: mi,
  isValidEntityCode: gi,
  isWhiteSpace: Zn,
  lib: yd,
  normalizeReference: tr,
  unescapeAll: wn,
  unescapeMd: bd
}, Symbol.toStringTag, { value: "Module" }));
function wd(e, t, n) {
  let u, r, i, o;
  const a = e.posMax, s = e.pos;
  for (e.pos = t + 1, u = 1; e.pos < a; ) {
    if (i = e.src.charCodeAt(e.pos), i === 93 && (u--, u === 0)) {
      r = !0;
      break;
    }
    if (o = e.pos, e.md.inline.skipToken(e), i === 91) {
      if (o === e.pos - 1)
        u++;
      else if (n)
        return e.pos = s, -1;
    }
  }
  let c = -1;
  return r && (c = e.pos), e.pos = s, c;
}
function Ed(e, t, n) {
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
        return i.pos = r + 1, i.str = wn(e.slice(t + 1, r)), i.ok = !0, i;
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
  return t === r || o !== 0 || (i.str = wn(e.slice(t, r)), i.pos = r, i.ok = !0), i;
}
function Cd(e, t, n, u) {
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
    let a = e.charCodeAt(i);
    if (a !== 34 && a !== 39 && a !== 40)
      return o;
    t++, i++, a === 40 && (a = 41), o.marker = a;
  }
  for (; i < n; ) {
    if (r = e.charCodeAt(i), r === o.marker)
      return o.pos = i + 1, o.str += wn(e.slice(t, i)), o.ok = !0, o;
    if (r === 40 && o.marker === 41)
      return o;
    r === 92 && i + 1 < n && i++, i++;
  }
  return o.can_continue = !0, o.str += wn(e.slice(t, i)), o;
}
const Ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Ed,
  parseLinkLabel: wd,
  parseLinkTitle: Cd
}, Symbol.toStringTag, { value: "Module" })), Ct = {};
Ct.code_inline = function(e, t, n, u, r) {
  const i = e[t];
  return "<code" + r.renderAttrs(i) + ">" + Zt(i.content) + "</code>";
};
Ct.code_block = function(e, t, n, u, r) {
  const i = e[t];
  return "<pre" + r.renderAttrs(i) + "><code>" + Zt(e[t].content) + `</code></pre>
`;
};
Ct.fence = function(e, t, n, u, r) {
  const i = e[t], o = i.info ? wn(i.info).trim() : "";
  let a = "", s = "";
  if (o) {
    const l = o.split(/(\s+)/g);
    a = l[0], s = l.slice(2).join("");
  }
  let c;
  if (n.highlight ? c = n.highlight(i.content, a, s) || Zt(i.content) : c = Zt(i.content), c.indexOf("<pre") === 0)
    return c + `
`;
  if (o) {
    const l = i.attrIndex("class"), f = i.attrs ? i.attrs.slice() : [];
    l < 0 ? f.push(["class", n.langPrefix + a]) : (f[l] = f[l].slice(), f[l][1] += " " + n.langPrefix + a);
    const h = {
      attrs: f
    };
    return `<pre><code${r.renderAttrs(h)}>${c}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(i)}>${c}</code></pre>
`;
};
Ct.image = function(e, t, n, u, r) {
  const i = e[t];
  return i.attrs[i.attrIndex("alt")][1] = r.renderInlineAsText(i.children, n, u), r.renderToken(e, t, n);
};
Ct.hardbreak = function(e, t, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
Ct.softbreak = function(e, t, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
Ct.text = function(e, t) {
  return Zt(e[t].content);
};
Ct.html_block = function(e, t) {
  return e[t].content;
};
Ct.html_inline = function(e, t) {
  return e[t].content;
};
function Fn() {
  this.rules = er({}, Ct);
}
Fn.prototype.renderAttrs = function(t) {
  let n, u, r;
  if (!t.attrs)
    return "";
  for (r = "", n = 0, u = t.attrs.length; n < u; n++)
    r += " " + Zt(t.attrs[n][0]) + '="' + Zt(t.attrs[n][1]) + '"';
  return r;
};
Fn.prototype.renderToken = function(t, n, u) {
  const r = t[n];
  let i = "";
  if (r.hidden)
    return "";
  r.block && r.nesting !== -1 && n && t[n - 1].hidden && (i += `
`), i += (r.nesting === -1 ? "</" : "<") + r.tag, i += this.renderAttrs(r), r.nesting === 0 && u.xhtmlOut && (i += " /");
  let o = !1;
  if (r.block && (o = !0, r.nesting === 1 && n + 1 < t.length)) {
    const a = t[n + 1];
    (a.type === "inline" || a.hidden || a.nesting === -1 && a.tag === r.tag) && (o = !1);
  }
  return i += o ? `>
` : ">", i;
};
Fn.prototype.renderInline = function(e, t, n) {
  let u = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const a = e[i].type;
    typeof r[a] < "u" ? u += r[a](e, i, t, n, this) : u += this.renderToken(e, i, t);
  }
  return u;
};
Fn.prototype.renderInlineAsText = function(e, t, n) {
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
Fn.prototype.render = function(e, t, n) {
  let u = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const a = e[i].type;
    a === "inline" ? u += this.renderInline(e[i].children, t, n) : typeof r[a] < "u" ? u += r[a](e, i, t, n, this) : u += this.renderToken(e, i, t, n);
  }
  return u;
};
function Ke() {
  this.__rules__ = [], this.__cache__ = null;
}
Ke.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Ke.prototype.__compile__ = function() {
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
Ke.prototype.at = function(e, t, n) {
  const u = this.__find__(e), r = n || {};
  if (u === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[u].fn = t, this.__rules__[u].alt = r.alt || [], this.__cache__ = null;
};
Ke.prototype.before = function(e, t, n, u) {
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
Ke.prototype.after = function(e, t, n, u) {
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
Ke.prototype.push = function(e, t, n) {
  const u = n || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: u.alt || []
  }), this.__cache__ = null;
};
Ke.prototype.enable = function(e, t) {
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
Ke.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(n) {
    n.enabled = !1;
  }), this.enable(e, t);
};
Ke.prototype.disable = function(e, t) {
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
Ke.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function ht(e, t, n) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
ht.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const n = this.attrs;
  for (let u = 0, r = n.length; u < r; u++)
    if (n[u][0] === t)
      return u;
  return -1;
};
ht.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
ht.prototype.attrSet = function(t, n) {
  const u = this.attrIndex(t), r = [t, n];
  u < 0 ? this.attrPush(r) : this.attrs[u] = r;
};
ht.prototype.attrGet = function(t) {
  const n = this.attrIndex(t);
  let u = null;
  return n >= 0 && (u = this.attrs[n][1]), u;
};
ht.prototype.attrJoin = function(t, n) {
  const u = this.attrIndex(t);
  u < 0 ? this.attrPush([t, n]) : this.attrs[u][1] = this.attrs[u][1] + " " + n;
};
function ms(e, t, n) {
  this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = t;
}
ms.prototype.Token = ht;
const Dd = /\r\n?|\n/g, Sd = /\0/g;
function Td(e) {
  let t;
  t = e.src.replace(Dd, `
`), t = t.replace(Sd, "�"), e.src = t;
}
function Od(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function Fd(e) {
  const t = e.tokens;
  for (let n = 0, u = t.length; n < u; n++) {
    const r = t[n];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function Md(e) {
  return /^<a[>\s]/i.test(e);
}
function Rd(e) {
  return /^<\/a\s*>/i.test(e);
}
function Nd(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let n = 0, u = t.length; n < u; n++) {
      if (t[n].type !== "inline" || !e.md.linkify.pretest(t[n].content))
        continue;
      let r = t[n].children, i = 0;
      for (let o = r.length - 1; o >= 0; o--) {
        const a = r[o];
        if (a.type === "link_close") {
          for (o--; r[o].level !== a.level && r[o].type !== "link_open"; )
            o--;
          continue;
        }
        if (a.type === "html_inline" && (Md(a.content) && i > 0 && i--, Rd(a.content) && i++), !(i > 0) && a.type === "text" && e.md.linkify.test(a.content)) {
          const s = a.content;
          let c = e.md.linkify.match(s);
          const l = [];
          let f = a.level, h = 0;
          c.length > 0 && c[0].index === 0 && o > 0 && r[o - 1].type === "text_special" && (c = c.slice(1));
          for (let b = 0; b < c.length; b++) {
            const d = c[b].url, g = e.md.normalizeLink(d);
            if (!e.md.validateLink(g))
              continue;
            let m = c[b].text;
            c[b].schema ? c[b].schema === "mailto:" && !/^mailto:/i.test(m) ? m = e.md.normalizeLinkText("mailto:" + m).replace(/^mailto:/, "") : m = e.md.normalizeLinkText(m) : m = e.md.normalizeLinkText("http://" + m).replace(/^http:\/\//, "");
            const A = c[b].index;
            if (A > h) {
              const k = new e.Token("text", "", 0);
              k.content = s.slice(h, A), k.level = f, l.push(k);
            }
            const _ = new e.Token("link_open", "a", 1);
            _.attrs = [["href", g]], _.level = f++, _.markup = "linkify", _.info = "auto", l.push(_);
            const w = new e.Token("text", "", 0);
            w.content = m, w.level = f, l.push(w);
            const v = new e.Token("link_close", "a", -1);
            v.level = --f, v.markup = "linkify", v.info = "auto", l.push(v), h = c[b].lastIndex;
          }
          if (h < s.length) {
            const b = new e.Token("text", "", 0);
            b.content = s.slice(h), b.level = f, l.push(b);
          }
          t[n].children = r = bs(r, o, l);
        }
      }
    }
}
const gs = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Id = /\((c|tm|r)\)/i, Pd = /\((c|tm|r)\)/ig, Ld = {
  c: "©",
  r: "®",
  tm: "™"
};
function Bd(e, t) {
  return Ld[t.toLowerCase()];
}
function zd(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const u = e[n];
    u.type === "text" && !t && (u.content = u.content.replace(Pd, Bd)), u.type === "link_open" && u.info === "auto" && t--, u.type === "link_close" && u.info === "auto" && t++;
  }
}
function qd(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const u = e[n];
    u.type === "text" && !t && gs.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), u.type === "link_open" && u.info === "auto" && t--, u.type === "link_close" && u.info === "auto" && t++;
  }
}
function jd(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (Id.test(e.tokens[t].content) && zd(e.tokens[t].children), gs.test(e.tokens[t].content) && qd(e.tokens[t].children));
}
const Ud = /['"]/, ko = /['"]/g, wo = "’";
function xu(e, t, n) {
  return e.slice(0, t) + n + e.slice(t + 1);
}
function $d(e, t) {
  let n;
  const u = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r], o = e[r].level;
    for (n = u.length - 1; n >= 0 && !(u[n].level <= o); n--)
      ;
    if (u.length = n + 1, i.type !== "text")
      continue;
    let a = i.content, s = 0, c = a.length;
    e:
      for (; s < c; ) {
        ko.lastIndex = s;
        const l = ko.exec(a);
        if (!l)
          break;
        let f = !0, h = !0;
        s = l.index + 1;
        const b = l[0] === "'";
        let d = 32;
        if (l.index - 1 >= 0)
          d = a.charCodeAt(l.index - 1);
        else
          for (n = r - 1; n >= 0 && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n--)
            if (e[n].content) {
              d = e[n].content.charCodeAt(e[n].content.length - 1);
              break;
            }
        let g = 32;
        if (s < c)
          g = a.charCodeAt(s);
        else
          for (n = r + 1; n < e.length && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n++)
            if (e[n].content) {
              g = e[n].content.charCodeAt(0);
              break;
            }
        const m = Kn(d) || Yn(String.fromCharCode(d)), A = Kn(g) || Yn(String.fromCharCode(g)), _ = Zn(d), w = Zn(g);
        if (w ? f = !1 : A && (_ || m || (f = !1)), _ ? h = !1 : m && (w || A || (h = !1)), g === 34 && l[0] === '"' && d >= 48 && d <= 57 && (h = f = !1), f && h && (f = m, h = A), !f && !h) {
          b && (i.content = xu(i.content, l.index, wo));
          continue;
        }
        if (h)
          for (n = u.length - 1; n >= 0; n--) {
            let v = u[n];
            if (u[n].level < o)
              break;
            if (v.single === b && u[n].level === o) {
              v = u[n];
              let k, y;
              b ? (k = t.md.options.quotes[2], y = t.md.options.quotes[3]) : (k = t.md.options.quotes[0], y = t.md.options.quotes[1]), i.content = xu(i.content, l.index, y), e[v.token].content = xu(
                e[v.token].content,
                v.pos,
                k
              ), s += y.length - 1, v.token === r && (s += k.length - 1), a = i.content, c = a.length, u.length = n;
              continue e;
            }
          }
        f ? u.push({
          token: r,
          pos: l.index,
          single: b,
          level: o
        }) : h && b && (i.content = xu(i.content, l.index, wo));
      }
  }
}
function Hd(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !Ud.test(e.tokens[t].content) || $d(e.tokens[t].children, e);
}
function Wd(e) {
  let t, n;
  const u = e.tokens, r = u.length;
  for (let i = 0; i < r; i++) {
    if (u[i].type !== "inline") continue;
    const o = u[i].children, a = o.length;
    for (t = 0; t < a; t++)
      o[t].type === "text_special" && (o[t].type = "text");
    for (t = n = 0; t < a; t++)
      o[t].type === "text" && t + 1 < a && o[t + 1].type === "text" ? o[t + 1].content = o[t].content + o[t + 1].content : (t !== n && (o[n] = o[t]), n++);
    t !== n && (o.length = n);
  }
}
const kr = [
  ["normalize", Td],
  ["block", Od],
  ["inline", Fd],
  ["linkify", Nd],
  ["replacements", jd],
  ["smartquotes", Hd],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Wd]
];
function _i() {
  this.ruler = new Ke();
  for (let e = 0; e < kr.length; e++)
    this.ruler.push(kr[e][0], kr[e][1]);
}
_i.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let n = 0, u = t.length; n < u; n++)
    t[n](e);
};
_i.prototype.State = ms;
function At(e, t, n, u) {
  this.src = e, this.md = t, this.env = n, this.tokens = u, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let i = 0, o = 0, a = 0, s = 0, c = r.length, l = !1; o < c; o++) {
    const f = r.charCodeAt(o);
    if (!l)
      if (se(f)) {
        a++, f === 9 ? s += 4 - s % 4 : s++;
        continue;
      } else
        l = !0;
    (f === 10 || o === c - 1) && (f !== 10 && o++, this.bMarks.push(i), this.eMarks.push(o), this.tShift.push(a), this.sCount.push(s), this.bsCount.push(0), l = !1, a = 0, s = 0, i = o + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
At.prototype.push = function(e, t, n) {
  const u = new ht(e, t, n);
  return u.block = !0, n < 0 && this.level--, u.level = this.level, n > 0 && this.level++, this.tokens.push(u), u;
};
At.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
At.prototype.skipEmptyLines = function(t) {
  for (let n = this.lineMax; t < n && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
At.prototype.skipSpaces = function(t) {
  for (let n = this.src.length; t < n; t++) {
    const u = this.src.charCodeAt(t);
    if (!se(u))
      break;
  }
  return t;
};
At.prototype.skipSpacesBack = function(t, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (!se(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
At.prototype.skipChars = function(t, n) {
  for (let u = this.src.length; t < u && this.src.charCodeAt(t) === n; t++)
    ;
  return t;
};
At.prototype.skipCharsBack = function(t, n, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (n !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
At.prototype.getLines = function(t, n, u, r) {
  if (t >= n)
    return "";
  const i = new Array(n - t);
  for (let o = 0, a = t; a < n; a++, o++) {
    let s = 0;
    const c = this.bMarks[a];
    let l = c, f;
    for (a + 1 < n || r ? f = this.eMarks[a] + 1 : f = this.eMarks[a]; l < f && s < u; ) {
      const h = this.src.charCodeAt(l);
      if (se(h))
        h === 9 ? s += 4 - (s + this.bsCount[a]) % 4 : s++;
      else if (l - c < this.tShift[a])
        s++;
      else
        break;
      l++;
    }
    s > u ? i[o] = new Array(s - u + 1).join(" ") + this.src.slice(l, f) : i[o] = this.src.slice(l, f);
  }
  return i.join("");
};
At.prototype.Token = ht;
const Gd = 65536;
function wr(e, t) {
  const n = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  return e.src.slice(n, u);
}
function Eo(e) {
  const t = [], n = e.length;
  let u = 0, r = e.charCodeAt(u), i = !1, o = 0, a = "";
  for (; u < n; )
    r === 124 && (i ? (a += e.substring(o, u - 1), o = u) : (t.push(a + e.substring(o, u)), a = "", o = u + 1)), i = r === 92, u++, r = e.charCodeAt(u);
  return t.push(a + e.substring(o)), t;
}
function Vd(e, t, n, u) {
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
  const a = e.src.charCodeAt(i++);
  if (a !== 124 && a !== 45 && a !== 58 && !se(a) || o === 45 && se(a))
    return !1;
  for (; i < e.eMarks[r]; ) {
    const v = e.src.charCodeAt(i);
    if (v !== 124 && v !== 45 && v !== 58 && !se(v))
      return !1;
    i++;
  }
  let s = wr(e, t + 1), c = s.split("|");
  const l = [];
  for (let v = 0; v < c.length; v++) {
    const k = c[v].trim();
    if (!k) {
      if (v === 0 || v === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(k))
      return !1;
    k.charCodeAt(k.length - 1) === 58 ? l.push(k.charCodeAt(0) === 58 ? "center" : "right") : k.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (s = wr(e, t).trim(), s.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = Eo(s), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const f = c.length;
  if (f === 0 || f !== l.length)
    return !1;
  if (u)
    return !0;
  const h = e.parentType;
  e.parentType = "table";
  const b = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), g = [t, 0];
  d.map = g;
  const m = e.push("thead_open", "thead", 1);
  m.map = [t, t + 1];
  const A = e.push("tr_open", "tr", 1);
  A.map = [t, t + 1];
  for (let v = 0; v < c.length; v++) {
    const k = e.push("th_open", "th", 1);
    l[v] && (k.attrs = [["style", "text-align:" + l[v]]]);
    const y = e.push("inline", "", 0);
    y.content = c[v].trim(), y.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let _, w = 0;
  for (r = t + 2; r < n && !(e.sCount[r] < e.blkIndent); r++) {
    let v = !1;
    for (let y = 0, O = b.length; y < O; y++)
      if (b[y](e, r, n, !0)) {
        v = !0;
        break;
      }
    if (v || (s = wr(e, r).trim(), !s) || e.sCount[r] - e.blkIndent >= 4 || (c = Eo(s), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), w += f - c.length, w > Gd))
      break;
    if (r === t + 2) {
      const y = e.push("tbody_open", "tbody", 1);
      y.map = _ = [t + 2, 0];
    }
    const k = e.push("tr_open", "tr", 1);
    k.map = [r, r + 1];
    for (let y = 0; y < f; y++) {
      const O = e.push("td_open", "td", 1);
      l[y] && (O.attrs = [["style", "text-align:" + l[y]]]);
      const P = e.push("inline", "", 0);
      P.content = c[y] ? c[y].trim() : "", P.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return _ && (e.push("tbody_close", "tbody", -1), _[1] = r), e.push("table_close", "table", -1), g[1] = r, e.parentType = h, e.line = r, !0;
}
function Zd(e, t, n) {
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
function Yd(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || r + 3 > i)
    return !1;
  const o = e.src.charCodeAt(r);
  if (o !== 126 && o !== 96)
    return !1;
  let a = r;
  r = e.skipChars(r, o);
  let s = r - a;
  if (s < 3)
    return !1;
  const c = e.src.slice(a, r), l = e.src.slice(r, i);
  if (o === 96 && l.indexOf(String.fromCharCode(o)) >= 0)
    return !1;
  if (u)
    return !0;
  let f = t, h = !1;
  for (; f++, !(f >= n || (r = a = e.bMarks[f] + e.tShift[f], i = e.eMarks[f], r < i && e.sCount[f] < e.blkIndent)); )
    if (e.src.charCodeAt(r) === o && !(e.sCount[f] - e.blkIndent >= 4) && (r = e.skipChars(r, o), !(r - a < s) && (r = e.skipSpaces(r), !(r < i)))) {
      h = !0;
      break;
    }
  s = e.sCount[t], e.line = f + (h ? 1 : 0);
  const b = e.push("fence", "code", 0);
  return b.info = l, b.content = e.getLines(t + 1, f, s, !0), b.markup = c, b.map = [t, e.line], !0;
}
function Kd(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  const o = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 62)
    return !1;
  if (u)
    return !0;
  const a = [], s = [], c = [], l = [], f = e.md.block.ruler.getRules("blockquote"), h = e.parentType;
  e.parentType = "blockquote";
  let b = !1, d;
  for (d = t; d < n; d++) {
    const w = e.sCount[d] < e.blkIndent;
    if (r = e.bMarks[d] + e.tShift[d], i = e.eMarks[d], r >= i)
      break;
    if (e.src.charCodeAt(r++) === 62 && !w) {
      let k = e.sCount[d] + 1, y, O;
      e.src.charCodeAt(r) === 32 ? (r++, k++, O = !1, y = !0) : e.src.charCodeAt(r) === 9 ? (y = !0, (e.bsCount[d] + k) % 4 === 3 ? (r++, k++, O = !1) : O = !0) : y = !1;
      let P = k;
      for (a.push(e.bMarks[d]), e.bMarks[d] = r; r < i; ) {
        const H = e.src.charCodeAt(r);
        if (se(H))
          H === 9 ? P += 4 - (P + e.bsCount[d] + (O ? 1 : 0)) % 4 : P++;
        else
          break;
        r++;
      }
      b = r >= i, s.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (y ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = P - k, l.push(e.tShift[d]), e.tShift[d] = r - e.bMarks[d];
      continue;
    }
    if (b)
      break;
    let v = !1;
    for (let k = 0, y = f.length; k < y; k++)
      if (f[k](e, d, n, !0)) {
        v = !0;
        break;
      }
    if (v) {
      e.lineMax = d, e.blkIndent !== 0 && (a.push(e.bMarks[d]), s.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    a.push(e.bMarks[d]), s.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] = -1;
  }
  const g = e.blkIndent;
  e.blkIndent = 0;
  const m = e.push("blockquote_open", "blockquote", 1);
  m.markup = ">";
  const A = [t, 0];
  m.map = A, e.md.block.tokenize(e, t, d);
  const _ = e.push("blockquote_close", "blockquote", -1);
  _.markup = ">", e.lineMax = o, e.parentType = h, A[1] = e.line;
  for (let w = 0; w < l.length; w++)
    e.bMarks[w + t] = a[w], e.tShift[w + t] = l[w], e.sCount[w + t] = c[w], e.bsCount[w + t] = s[w];
  return e.blkIndent = g, !0;
}
function Xd(e, t, n, u) {
  const r = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let i = e.bMarks[t] + e.tShift[t];
  const o = e.src.charCodeAt(i++);
  if (o !== 42 && o !== 45 && o !== 95)
    return !1;
  let a = 1;
  for (; i < r; ) {
    const c = e.src.charCodeAt(i++);
    if (c !== o && !se(c))
      return !1;
    c === o && a++;
  }
  if (a < 3)
    return !1;
  if (u)
    return !0;
  e.line = t + 1;
  const s = e.push("hr", "hr", 0);
  return s.map = [t, e.line], s.markup = Array(a + 1).join(String.fromCharCode(o)), !0;
}
function Co(e, t) {
  const n = e.eMarks[t];
  let u = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(u++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (u < n) {
    const i = e.src.charCodeAt(u);
    if (!se(i))
      return -1;
  }
  return u;
}
function Ao(e, t) {
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
  return r < u && (i = e.src.charCodeAt(r), !se(i)) ? -1 : r;
}
function Jd(e, t) {
  const n = e.level + 2;
  for (let u = t + 2, r = e.tokens.length - 2; u < r; u++)
    e.tokens[u].level === n && e.tokens[u].type === "paragraph_open" && (e.tokens[u + 2].hidden = !0, e.tokens[u].hidden = !0, u += 2);
}
function Qd(e, t, n, u) {
  let r, i, o, a, s = t, c = !0;
  if (e.sCount[s] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[s] - e.listIndent >= 4 && e.sCount[s] < e.blkIndent)
    return !1;
  let l = !1;
  u && e.parentType === "paragraph" && e.sCount[s] >= e.blkIndent && (l = !0);
  let f, h, b;
  if ((b = Ao(e, s)) >= 0) {
    if (f = !0, o = e.bMarks[s] + e.tShift[s], h = Number(e.src.slice(o, b - 1)), l && h !== 1) return !1;
  } else if ((b = Co(e, s)) >= 0)
    f = !1;
  else
    return !1;
  if (l && e.skipSpaces(b) >= e.eMarks[s])
    return !1;
  if (u)
    return !0;
  const d = e.src.charCodeAt(b - 1), g = e.tokens.length;
  f ? (a = e.push("ordered_list_open", "ol", 1), h !== 1 && (a.attrs = [["start", h]])) : a = e.push("bullet_list_open", "ul", 1);
  const m = [s, 0];
  a.map = m, a.markup = String.fromCharCode(d);
  let A = !1;
  const _ = e.md.block.ruler.getRules("list"), w = e.parentType;
  for (e.parentType = "list"; s < n; ) {
    i = b, r = e.eMarks[s];
    const v = e.sCount[s] + b - (e.bMarks[s] + e.tShift[s]);
    let k = v;
    for (; i < r; ) {
      const X = e.src.charCodeAt(i);
      if (X === 9)
        k += 4 - (k + e.bsCount[s]) % 4;
      else if (X === 32)
        k++;
      else
        break;
      i++;
    }
    const y = i;
    let O;
    y >= r ? O = 1 : O = k - v, O > 4 && (O = 1);
    const P = v + O;
    a = e.push("list_item_open", "li", 1), a.markup = String.fromCharCode(d);
    const H = [s, 0];
    a.map = H, f && (a.info = e.src.slice(o, b - 1));
    const le = e.tight, re = e.tShift[s], Ce = e.sCount[s], Ie = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = P, e.tight = !0, e.tShift[s] = y - e.bMarks[s], e.sCount[s] = k, y >= r && e.isEmpty(s + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, s, n, !0), (!e.tight || A) && (c = !1), A = e.line - s > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = Ie, e.tShift[s] = re, e.sCount[s] = Ce, e.tight = le, a = e.push("list_item_close", "li", -1), a.markup = String.fromCharCode(d), s = e.line, H[1] = s, s >= n || e.sCount[s] < e.blkIndent || e.sCount[s] - e.blkIndent >= 4)
      break;
    let be = !1;
    for (let X = 0, De = _.length; X < De; X++)
      if (_[X](e, s, n, !0)) {
        be = !0;
        break;
      }
    if (be)
      break;
    if (f) {
      if (b = Ao(e, s), b < 0)
        break;
      o = e.bMarks[s] + e.tShift[s];
    } else if (b = Co(e, s), b < 0)
      break;
    if (d !== e.src.charCodeAt(b - 1))
      break;
  }
  return f ? a = e.push("ordered_list_close", "ol", -1) : a = e.push("bullet_list_close", "ul", -1), a.markup = String.fromCharCode(d), m[1] = s, e.line = s, e.parentType = w, c && Jd(e, g), !0;
}
function e1(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t], o = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function a(_) {
    const w = e.lineMax;
    if (_ >= w || e.isEmpty(_))
      return null;
    let v = !1;
    if (e.sCount[_] - e.blkIndent > 3 && (v = !0), e.sCount[_] < 0 && (v = !0), !v) {
      const O = e.md.block.ruler.getRules("reference"), P = e.parentType;
      e.parentType = "reference";
      let H = !1;
      for (let le = 0, re = O.length; le < re; le++)
        if (O[le](e, _, w, !0)) {
          H = !0;
          break;
        }
      if (e.parentType = P, H)
        return null;
    }
    const k = e.bMarks[_] + e.tShift[_], y = e.eMarks[_];
    return e.src.slice(k, y + 1);
  }
  let s = e.src.slice(r, i + 1);
  i = s.length;
  let c = -1;
  for (r = 1; r < i; r++) {
    const _ = s.charCodeAt(r);
    if (_ === 91)
      return !1;
    if (_ === 93) {
      c = r;
      break;
    } else if (_ === 10) {
      const w = a(o);
      w !== null && (s += w, i = s.length, o++);
    } else if (_ === 92 && (r++, r < i && s.charCodeAt(r) === 10)) {
      const w = a(o);
      w !== null && (s += w, i = s.length, o++);
    }
  }
  if (c < 0 || s.charCodeAt(c + 1) !== 58)
    return !1;
  for (r = c + 2; r < i; r++) {
    const _ = s.charCodeAt(r);
    if (_ === 10) {
      const w = a(o);
      w !== null && (s += w, i = s.length, o++);
    } else if (!se(_)) break;
  }
  const l = e.md.helpers.parseLinkDestination(s, r, i);
  if (!l.ok)
    return !1;
  const f = e.md.normalizeLink(l.str);
  if (!e.md.validateLink(f))
    return !1;
  r = l.pos;
  const h = r, b = o, d = r;
  for (; r < i; r++) {
    const _ = s.charCodeAt(r);
    if (_ === 10) {
      const w = a(o);
      w !== null && (s += w, i = s.length, o++);
    } else if (!se(_)) break;
  }
  let g = e.md.helpers.parseLinkTitle(s, r, i);
  for (; g.can_continue; ) {
    const _ = a(o);
    if (_ === null) break;
    s += _, r = i, i = s.length, o++, g = e.md.helpers.parseLinkTitle(s, r, i, g);
  }
  let m;
  for (r < i && d !== r && g.ok ? (m = g.str, r = g.pos) : (m = "", r = h, o = b); r < i; ) {
    const _ = s.charCodeAt(r);
    if (!se(_))
      break;
    r++;
  }
  if (r < i && s.charCodeAt(r) !== 10 && m)
    for (m = "", r = h, o = b; r < i; ) {
      const _ = s.charCodeAt(r);
      if (!se(_))
        break;
      r++;
    }
  if (r < i && s.charCodeAt(r) !== 10)
    return !1;
  const A = tr(s.slice(1, c));
  return A ? (u || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[A] > "u" && (e.env.references[A] = { title: m, href: f }), e.line = o), !0) : !1;
}
const t1 = [
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
], n1 = "[a-zA-Z_:][a-zA-Z0-9:._-]*", u1 = "[^\"'=<>`\\x00-\\x20]+", r1 = "'[^']*'", i1 = '"[^"]*"', o1 = "(?:" + u1 + "|" + r1 + "|" + i1 + ")", a1 = "(?:\\s+" + n1 + "(?:\\s*=\\s*" + o1 + ")?)", _s = "<[A-Za-z][A-Za-z0-9\\-]*" + a1 + "*\\s*\\/?>", xs = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", s1 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", c1 = "<[?][\\s\\S]*?[?]>", l1 = "<![A-Za-z][^>]*>", f1 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", d1 = new RegExp("^(?:" + _s + "|" + xs + "|" + s1 + "|" + c1 + "|" + l1 + "|" + f1 + ")"), h1 = new RegExp("^(?:" + _s + "|" + xs + ")"), bn = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + t1.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(h1.source + "\\s*$"), /^$/, !1]
];
function b1(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let o = e.src.slice(r, i), a = 0;
  for (; a < bn.length && !bn[a][0].test(o); a++)
    ;
  if (a === bn.length)
    return !1;
  if (u)
    return bn[a][2];
  let s = t + 1;
  if (!bn[a][1].test(o)) {
    for (; s < n && !(e.sCount[s] < e.blkIndent); s++)
      if (r = e.bMarks[s] + e.tShift[s], i = e.eMarks[s], o = e.src.slice(r, i), bn[a][1].test(o)) {
        o.length !== 0 && s++;
        break;
      }
  }
  e.line = s;
  const c = e.push("html_block", "", 0);
  return c.map = [t, s], c.content = e.getLines(t, s, e.blkIndent, !0), !0;
}
function p1(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.src.charCodeAt(r);
  if (o !== 35 || r >= i)
    return !1;
  let a = 1;
  for (o = e.src.charCodeAt(++r); o === 35 && r < i && a <= 6; )
    a++, o = e.src.charCodeAt(++r);
  if (a > 6 || r < i && !se(o))
    return !1;
  if (u)
    return !0;
  i = e.skipSpacesBack(i, r);
  const s = e.skipCharsBack(i, 35, r);
  s > r && se(e.src.charCodeAt(s - 1)) && (i = s), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(a), 1);
  c.markup = "########".slice(0, a), c.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(r, i).trim(), l.map = [t, e.line], l.children = [];
  const f = e.push("heading_close", "h" + String(a), -1);
  return f.markup = "########".slice(0, a), !0;
}
function m1(e, t, n) {
  const u = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const r = e.parentType;
  e.parentType = "paragraph";
  let i = 0, o, a = t + 1;
  for (; a < n && !e.isEmpty(a); a++) {
    if (e.sCount[a] - e.blkIndent > 3)
      continue;
    if (e.sCount[a] >= e.blkIndent) {
      let b = e.bMarks[a] + e.tShift[a];
      const d = e.eMarks[a];
      if (b < d && (o = e.src.charCodeAt(b), (o === 45 || o === 61) && (b = e.skipChars(b, o), b = e.skipSpaces(b), b >= d))) {
        i = o === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[a] < 0)
      continue;
    let h = !1;
    for (let b = 0, d = u.length; b < d; b++)
      if (u[b](e, a, n, !0)) {
        h = !0;
        break;
      }
    if (h)
      break;
  }
  if (!i)
    return !1;
  const s = e.getLines(t, a, e.blkIndent, !1).trim();
  e.line = a + 1;
  const c = e.push("heading_open", "h" + String(i), 1);
  c.markup = String.fromCharCode(o), c.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = s, l.map = [t, e.line - 1], l.children = [];
  const f = e.push("heading_close", "h" + String(i), -1);
  return f.markup = String.fromCharCode(o), e.parentType = r, !0;
}
function g1(e, t, n) {
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
  const a = e.push("paragraph_open", "p", 1);
  a.map = [t, e.line];
  const s = e.push("inline", "", 0);
  return s.content = o, s.map = [t, e.line], s.children = [], e.push("paragraph_close", "p", -1), e.parentType = r, !0;
}
const vu = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", Vd, ["paragraph", "reference"]],
  ["code", Zd],
  ["fence", Yd, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Kd, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Xd, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Qd, ["paragraph", "reference", "blockquote"]],
  ["reference", e1],
  ["html_block", b1, ["paragraph", "reference", "blockquote"]],
  ["heading", p1, ["paragraph", "reference", "blockquote"]],
  ["lheading", m1],
  ["paragraph", g1]
];
function nr() {
  this.ruler = new Ke();
  for (let e = 0; e < vu.length; e++)
    this.ruler.push(vu[e][0], vu[e][1], { alt: (vu[e][2] || []).slice() });
}
nr.prototype.tokenize = function(e, t, n) {
  const u = this.ruler.getRules(""), r = u.length, i = e.md.options.maxNesting;
  let o = t, a = !1;
  for (; o < n && (e.line = o = e.skipEmptyLines(o), !(o >= n || e.sCount[o] < e.blkIndent)); ) {
    if (e.level >= i) {
      e.line = n;
      break;
    }
    const s = e.line;
    let c = !1;
    for (let l = 0; l < r; l++)
      if (c = u[l](e, o, n, !1), c) {
        if (s >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!c) throw new Error("none of the block rules matched");
    e.tight = !a, e.isEmpty(e.line - 1) && (a = !0), o = e.line, o < n && e.isEmpty(o) && (a = !0, o++, e.line = o);
  }
};
nr.prototype.parse = function(e, t, n, u) {
  if (!e)
    return;
  const r = new this.State(e, t, n, u);
  this.tokenize(r, r.line, r.lineMax);
};
nr.prototype.State = At;
function cu(e, t, n, u) {
  this.src = e, this.env = n, this.md = t, this.tokens = u, this.tokens_meta = Array(u.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
cu.prototype.pushPending = function() {
  const e = new ht("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
cu.prototype.push = function(e, t, n) {
  this.pending && this.pushPending();
  const u = new ht(e, t, n);
  let r = null;
  return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), u.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(u), this.tokens_meta.push(r), u;
};
cu.prototype.scanDelims = function(e, t) {
  const n = this.posMax, u = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let i = e;
  for (; i < n && this.src.charCodeAt(i) === u; )
    i++;
  const o = i - e, a = i < n ? this.src.charCodeAt(i) : 32, s = Kn(r) || Yn(String.fromCharCode(r)), c = Kn(a) || Yn(String.fromCharCode(a)), l = Zn(r), f = Zn(a), h = !f && (!c || l || s), b = !l && (!s || f || c);
  return { can_open: h && (t || !b || s), can_close: b && (t || !h || c), length: o };
};
cu.prototype.Token = ht;
function _1(e) {
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
function x1(e, t) {
  let n = e.pos;
  for (; n < e.posMax && !_1(e.src.charCodeAt(n)); )
    n++;
  return n === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, n)), e.pos = n, !0);
}
const v1 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function y1(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const n = e.pos, u = e.posMax;
  if (n + 3 > u || e.src.charCodeAt(n) !== 58 || e.src.charCodeAt(n + 1) !== 47 || e.src.charCodeAt(n + 2) !== 47) return !1;
  const r = e.pending.match(v1);
  if (!r) return !1;
  const i = r[1], o = e.md.linkify.matchAtStart(e.src.slice(n - i.length));
  if (!o) return !1;
  let a = o.url;
  if (a.length <= i.length) return !1;
  a = a.replace(/\*+$/, "");
  const s = e.md.normalizeLink(a);
  if (!e.md.validateLink(s)) return !1;
  if (!t) {
    e.pending = e.pending.slice(0, -i.length);
    const c = e.push("link_open", "a", 1);
    c.attrs = [["href", s]], c.markup = "linkify", c.info = "auto";
    const l = e.push("text", "", 0);
    l.content = e.md.normalizeLinkText(a);
    const f = e.push("link_close", "a", -1);
    f.markup = "linkify", f.info = "auto";
  }
  return e.pos += a.length - i.length, !0;
}
function k1(e, t) {
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
  for (n++; n < r && se(e.src.charCodeAt(n)); )
    n++;
  return e.pos = n, !0;
}
const xi = [];
for (let e = 0; e < 256; e++)
  xi.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  xi[e.charCodeAt(0)] = 1;
});
function w1(e, t) {
  let n = e.pos;
  const u = e.posMax;
  if (e.src.charCodeAt(n) !== 92 || (n++, n >= u)) return !1;
  let r = e.src.charCodeAt(n);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), n++; n < u && (r = e.src.charCodeAt(n), !!se(r)); )
      n++;
    return e.pos = n, !0;
  }
  let i = e.src[n];
  if (r >= 55296 && r <= 56319 && n + 1 < u) {
    const a = e.src.charCodeAt(n + 1);
    a >= 56320 && a <= 57343 && (i += e.src[n + 1], n++);
  }
  const o = "\\" + i;
  if (!t) {
    const a = e.push("text_special", "", 0);
    r < 256 && xi[r] !== 0 ? a.content = i : a.content = o, a.markup = o, a.info = "escape";
  }
  return e.pos = n + 1, !0;
}
function E1(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 96)
    return !1;
  const r = n;
  n++;
  const i = e.posMax;
  for (; n < i && e.src.charCodeAt(n) === 96; )
    n++;
  const o = e.src.slice(r, n), a = o.length;
  if (e.backticksScanned && (e.backticks[a] || 0) <= r)
    return t || (e.pending += o), e.pos += a, !0;
  let s = n, c;
  for (; (c = e.src.indexOf("`", s)) !== -1; ) {
    for (s = c + 1; s < i && e.src.charCodeAt(s) === 96; )
      s++;
    const l = s - c;
    if (l === a) {
      if (!t) {
        const f = e.push("code_inline", "code", 0);
        f.markup = o, f.content = e.src.slice(n, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = s, !0;
    }
    e.backticks[l] = c;
  }
  return e.backticksScanned = !0, t || (e.pending += o), e.pos += a, !0;
}
function C1(e, t) {
  const n = e.pos, u = e.src.charCodeAt(n);
  if (t || u !== 126)
    return !1;
  const r = e.scanDelims(e.pos, !0);
  let i = r.length;
  const o = String.fromCharCode(u);
  if (i < 2)
    return !1;
  let a;
  i % 2 && (a = e.push("text", "", 0), a.content = o, i--);
  for (let s = 0; s < i; s += 2)
    a = e.push("text", "", 0), a.content = o + o, e.delimiters.push({
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
function Do(e, t) {
  let n;
  const u = [], r = t.length;
  for (let i = 0; i < r; i++) {
    const o = t[i];
    if (o.marker !== 126 || o.end === -1)
      continue;
    const a = t[o.end];
    n = e.tokens[o.token], n.type = "s_open", n.tag = "s", n.nesting = 1, n.markup = "~~", n.content = "", n = e.tokens[a.token], n.type = "s_close", n.tag = "s", n.nesting = -1, n.markup = "~~", n.content = "", e.tokens[a.token - 1].type === "text" && e.tokens[a.token - 1].content === "~" && u.push(a.token - 1);
  }
  for (; u.length; ) {
    const i = u.pop();
    let o = i + 1;
    for (; o < e.tokens.length && e.tokens[o].type === "s_close"; )
      o++;
    o--, i !== o && (n = e.tokens[o], e.tokens[o] = e.tokens[i], e.tokens[i] = n);
  }
}
function A1(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  Do(e, e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && Do(e, t[u].delimiters);
}
const vs = {
  tokenize: C1,
  postProcess: A1
};
function D1(e, t) {
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
function So(e, t) {
  const n = t.length;
  for (let u = n - 1; u >= 0; u--) {
    const r = t[u];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1)
      continue;
    const i = t[r.end], o = u > 0 && t[u - 1].end === r.end + 1 && // check that first two markers match and adjacent
    t[u - 1].marker === r.marker && t[u - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[r.end + 1].token === i.token + 1, a = String.fromCharCode(r.marker), s = e.tokens[r.token];
    s.type = o ? "strong_open" : "em_open", s.tag = o ? "strong" : "em", s.nesting = 1, s.markup = o ? a + a : a, s.content = "";
    const c = e.tokens[i.token];
    c.type = o ? "strong_close" : "em_close", c.tag = o ? "strong" : "em", c.nesting = -1, c.markup = o ? a + a : a, c.content = "", o && (e.tokens[t[u - 1].token].content = "", e.tokens[t[r.end + 1].token].content = "", u--);
  }
}
function S1(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  So(e, e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && So(e, t[u].delimiters);
}
const ys = {
  tokenize: D1,
  postProcess: S1
};
function T1(e, t) {
  let n, u, r, i, o = "", a = "", s = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, f = e.posMax, h = e.pos + 1, b = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (b < 0)
    return !1;
  let d = b + 1;
  if (d < f && e.src.charCodeAt(d) === 40) {
    for (c = !1, d++; d < f && (n = e.src.charCodeAt(d), !(!se(n) && n !== 10)); d++)
      ;
    if (d >= f)
      return !1;
    if (s = d, r = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), r.ok) {
      for (o = e.md.normalizeLink(r.str), e.md.validateLink(o) ? d = r.pos : o = "", s = d; d < f && (n = e.src.charCodeAt(d), !(!se(n) && n !== 10)); d++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < f && s !== d && r.ok)
        for (a = r.str, d = r.pos; d < f && (n = e.src.charCodeAt(d), !(!se(n) && n !== 10)); d++)
          ;
    }
    (d >= f || e.src.charCodeAt(d) !== 41) && (c = !0), d++;
  }
  if (c) {
    if (typeof e.env.references > "u")
      return !1;
    if (d < f && e.src.charCodeAt(d) === 91 ? (s = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? u = e.src.slice(s, d++) : d = b + 1) : d = b + 1, u || (u = e.src.slice(h, b)), i = e.env.references[tr(u)], !i)
      return e.pos = l, !1;
    o = i.href, a = i.title;
  }
  if (!t) {
    e.pos = h, e.posMax = b;
    const g = e.push("link_open", "a", 1), m = [["href", o]];
    g.attrs = m, a && m.push(["title", a]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = d, e.posMax = f, !0;
}
function O1(e, t) {
  let n, u, r, i, o, a, s, c, l = "";
  const f = e.pos, h = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const b = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (d < 0)
    return !1;
  if (i = d + 1, i < h && e.src.charCodeAt(i) === 40) {
    for (i++; i < h && (n = e.src.charCodeAt(i), !(!se(n) && n !== 10)); i++)
      ;
    if (i >= h)
      return !1;
    for (c = i, a = e.md.helpers.parseLinkDestination(e.src, i, e.posMax), a.ok && (l = e.md.normalizeLink(a.str), e.md.validateLink(l) ? i = a.pos : l = ""), c = i; i < h && (n = e.src.charCodeAt(i), !(!se(n) && n !== 10)); i++)
      ;
    if (a = e.md.helpers.parseLinkTitle(e.src, i, e.posMax), i < h && c !== i && a.ok)
      for (s = a.str, i = a.pos; i < h && (n = e.src.charCodeAt(i), !(!se(n) && n !== 10)); i++)
        ;
    else
      s = "";
    if (i >= h || e.src.charCodeAt(i) !== 41)
      return e.pos = f, !1;
    i++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (i < h && e.src.charCodeAt(i) === 91 ? (c = i + 1, i = e.md.helpers.parseLinkLabel(e, i), i >= 0 ? r = e.src.slice(c, i++) : i = d + 1) : i = d + 1, r || (r = e.src.slice(b, d)), o = e.env.references[tr(r)], !o)
      return e.pos = f, !1;
    l = o.href, s = o.title;
  }
  if (!t) {
    u = e.src.slice(b, d);
    const g = [];
    e.md.inline.parse(
      u,
      e.md,
      e.env,
      g
    );
    const m = e.push("image", "img", 0), A = [["src", l], ["alt", ""]];
    m.attrs = A, m.children = g, m.content = u, s && A.push(["title", s]);
  }
  return e.pos = i, e.posMax = h, !0;
}
const F1 = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, M1 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function R1(e, t) {
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
  if (M1.test(i)) {
    const o = e.md.normalizeLink(i);
    if (!e.md.validateLink(o))
      return !1;
    if (!t) {
      const a = e.push("link_open", "a", 1);
      a.attrs = [["href", o]], a.markup = "autolink", a.info = "auto";
      const s = e.push("text", "", 0);
      s.content = e.md.normalizeLinkText(i);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += i.length + 2, !0;
  }
  if (F1.test(i)) {
    const o = e.md.normalizeLink("mailto:" + i);
    if (!e.md.validateLink(o))
      return !1;
    if (!t) {
      const a = e.push("link_open", "a", 1);
      a.attrs = [["href", o]], a.markup = "autolink", a.info = "auto";
      const s = e.push("text", "", 0);
      s.content = e.md.normalizeLinkText(i);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += i.length + 2, !0;
  }
  return !1;
}
function N1(e) {
  return /^<a[>\s]/i.test(e);
}
function I1(e) {
  return /^<\/a\s*>/i.test(e);
}
function P1(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function L1(e, t) {
  if (!e.md.options.html)
    return !1;
  const n = e.posMax, u = e.pos;
  if (e.src.charCodeAt(u) !== 60 || u + 2 >= n)
    return !1;
  const r = e.src.charCodeAt(u + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !P1(r))
    return !1;
  const i = e.src.slice(u).match(d1);
  if (!i)
    return !1;
  if (!t) {
    const o = e.push("html_inline", "", 0);
    o.content = i[0], N1(o.content) && e.linkLevel++, I1(o.content) && e.linkLevel--;
  }
  return e.pos += i[0].length, !0;
}
const B1 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, z1 = /^&([a-z][a-z0-9]{1,31});/i;
function q1(e, t) {
  const n = e.pos, u = e.posMax;
  if (e.src.charCodeAt(n) !== 38 || n + 1 >= u) return !1;
  if (e.src.charCodeAt(n + 1) === 35) {
    const i = e.src.slice(n).match(B1);
    if (i) {
      if (!t) {
        const o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), a = e.push("text_special", "", 0);
        a.content = gi(o) ? Lu(o) : Lu(65533), a.markup = i[0], a.info = "entity";
      }
      return e.pos += i[0].length, !0;
    }
  } else {
    const i = e.src.slice(n).match(z1);
    if (i) {
      const o = hs(i[0]);
      if (o !== i[0]) {
        if (!t) {
          const a = e.push("text_special", "", 0);
          a.content = o, a.markup = i[0], a.info = "entity";
        }
        return e.pos += i[0].length, !0;
      }
    }
  }
  return !1;
}
function To(e) {
  const t = {}, n = e.length;
  if (!n) return;
  let u = 0, r = -2;
  const i = [];
  for (let o = 0; o < n; o++) {
    const a = e[o];
    if (i.push(0), (e[u].marker !== a.marker || r !== a.token - 1) && (u = o), r = a.token, a.length = a.length || 0, !a.close) continue;
    t.hasOwnProperty(a.marker) || (t[a.marker] = [-1, -1, -1, -1, -1, -1]);
    const s = t[a.marker][(a.open ? 3 : 0) + a.length % 3];
    let c = u - i[u] - 1, l = c;
    for (; c > s; c -= i[c] + 1) {
      const f = e[c];
      if (f.marker === a.marker && f.open && f.end < 0) {
        let h = !1;
        if ((f.close || a.open) && (f.length + a.length) % 3 === 0 && (f.length % 3 !== 0 || a.length % 3 !== 0) && (h = !0), !h) {
          const b = c > 0 && !e[c - 1].open ? i[c - 1] + 1 : 0;
          i[o] = o - c + b, i[c] = b, a.open = !1, f.end = o, f.close = !1, l = -1, r = -2;
          break;
        }
      }
    }
    l !== -1 && (t[a.marker][(a.open ? 3 : 0) + (a.length || 0) % 3] = l);
  }
}
function j1(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  To(e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && To(t[u].delimiters);
}
function U1(e) {
  let t, n, u = 0;
  const r = e.tokens, i = e.tokens.length;
  for (t = n = 0; t < i; t++)
    r[t].nesting < 0 && u--, r[t].level = u, r[t].nesting > 0 && u++, r[t].type === "text" && t + 1 < i && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== n && (r[n] = r[t]), n++);
  t !== n && (r.length = n);
}
const Er = [
  ["text", x1],
  ["linkify", y1],
  ["newline", k1],
  ["escape", w1],
  ["backticks", E1],
  ["strikethrough", vs.tokenize],
  ["emphasis", ys.tokenize],
  ["link", T1],
  ["image", O1],
  ["autolink", R1],
  ["html_inline", L1],
  ["entity", q1]
], Cr = [
  ["balance_pairs", j1],
  ["strikethrough", vs.postProcess],
  ["emphasis", ys.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", U1]
];
function lu() {
  this.ruler = new Ke();
  for (let e = 0; e < Er.length; e++)
    this.ruler.push(Er[e][0], Er[e][1]);
  this.ruler2 = new Ke();
  for (let e = 0; e < Cr.length; e++)
    this.ruler2.push(Cr[e][0], Cr[e][1]);
}
lu.prototype.skipToken = function(e) {
  const t = e.pos, n = this.ruler.getRules(""), u = n.length, r = e.md.options.maxNesting, i = e.cache;
  if (typeof i[t] < "u") {
    e.pos = i[t];
    return;
  }
  let o = !1;
  if (e.level < r) {
    for (let a = 0; a < u; a++)
      if (e.level++, o = n[a](e, !0), e.level--, o) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  o || e.pos++, i[t] = e.pos;
};
lu.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), n = t.length, u = e.posMax, r = e.md.options.maxNesting;
  for (; e.pos < u; ) {
    const i = e.pos;
    let o = !1;
    if (e.level < r) {
      for (let a = 0; a < n; a++)
        if (o = t[a](e, !1), o) {
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
lu.prototype.parse = function(e, t, n, u) {
  const r = new this.State(e, t, n, u);
  this.tokenize(r);
  const i = this.ruler2.getRules(""), o = i.length;
  for (let a = 0; a < o; a++)
    i[a](r);
};
lu.prototype.State = cu;
function $1(e) {
  const t = {};
  e = e || {}, t.src_Any = ss.source, t.src_Cc = cs.source, t.src_Z = fs.source, t.src_P = pi.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const n = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function Wr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    n && Object.keys(n).forEach(function(u) {
      e[u] = n[u];
    });
  }), e;
}
function ur(e) {
  return Object.prototype.toString.call(e);
}
function H1(e) {
  return ur(e) === "[object String]";
}
function W1(e) {
  return ur(e) === "[object Object]";
}
function G1(e) {
  return ur(e) === "[object RegExp]";
}
function Oo(e) {
  return ur(e) === "[object Function]";
}
function V1(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const ks = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Z1(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t || ks.hasOwnProperty(n);
  }, !1);
}
const Y1 = {
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
}, K1 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", X1 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function J1(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function Q1(e) {
  return function(t, n) {
    const u = t.slice(n);
    return e.test(u) ? u.match(e)[0].length : 0;
  };
}
function Fo() {
  return function(e, t) {
    t.normalize(e);
  };
}
function Bu(e) {
  const t = e.re = $1(e.__opts__), n = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || n.push(K1), n.push(t.src_xn), t.src_tlds = n.join("|");
  function u(a) {
    return a.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(u(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(u(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(u(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(u(t.tpl_host_fuzzy_test), "i");
  const r = [];
  e.__compiled__ = {};
  function i(a, s) {
    throw new Error('(LinkifyIt) Invalid schema "' + a + '": ' + s);
  }
  Object.keys(e.__schemas__).forEach(function(a) {
    const s = e.__schemas__[a];
    if (s === null)
      return;
    const c = { validate: null, link: null };
    if (e.__compiled__[a] = c, W1(s)) {
      G1(s.validate) ? c.validate = Q1(s.validate) : Oo(s.validate) ? c.validate = s.validate : i(a, s), Oo(s.normalize) ? c.normalize = s.normalize : s.normalize ? i(a, s) : c.normalize = Fo();
      return;
    }
    if (H1(s)) {
      r.push(a);
      return;
    }
    i(a, s);
  }), r.forEach(function(a) {
    e.__compiled__[e.__schemas__[a]] && (e.__compiled__[a].validate = e.__compiled__[e.__schemas__[a]].validate, e.__compiled__[a].normalize = e.__compiled__[e.__schemas__[a]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: Fo() };
  const o = Object.keys(e.__compiled__).filter(function(a) {
    return a.length > 0 && e.__compiled__[a];
  }).map(V1).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), J1(e);
}
function eh(e, t) {
  const n = e.__index__, u = e.__last_index__, r = e.__text_cache__.slice(n, u);
  this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = u + t, this.raw = r, this.text = r, this.url = r;
}
function Gr(e, t) {
  const n = new eh(e, t);
  return e.__compiled__[n.schema].normalize(n, e), n;
}
function nt(e, t) {
  if (!(this instanceof nt))
    return new nt(e, t);
  t || Z1(e) && (t = e, e = {}), this.__opts__ = Wr({}, ks, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Wr({}, Y1, e), this.__compiled__ = {}, this.__tlds__ = X1, this.__tlds_replaced__ = !1, this.re = {}, Bu(this);
}
nt.prototype.add = function(t, n) {
  return this.__schemas__[t] = n, Bu(this), this;
};
nt.prototype.set = function(t) {
  return this.__opts__ = Wr(this.__opts__, t), this;
};
nt.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  let n, u, r, i, o, a, s, c, l;
  if (this.re.schema_test.test(t)) {
    for (s = this.re.schema_search, s.lastIndex = 0; (n = s.exec(t)) !== null; )
      if (i = this.testSchemaAt(t, n[2], s.lastIndex), i) {
        this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + i;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (u = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (o = u.index + u[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = u.index + u[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = t.indexOf("@"), l >= 0 && (r = t.match(this.re.email_fuzzy)) !== null && (o = r.index + r[1].length, a = r.index + r[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = a))), this.__index__ >= 0;
};
nt.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
nt.prototype.testSchemaAt = function(t, n, u) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(t, u, this) : 0;
};
nt.prototype.match = function(t) {
  const n = [];
  let u = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (n.push(Gr(this, u)), u = this.__last_index__);
  let r = u ? t.slice(u) : t;
  for (; this.test(r); )
    n.push(Gr(this, u)), r = r.slice(this.__last_index__), u += this.__last_index__;
  return n.length ? n : null;
};
nt.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const n = this.re.schema_at_start.exec(t);
  if (!n) return null;
  const u = this.testSchemaAt(t, n[2], n[0].length);
  return u ? (this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + u, Gr(this, 0)) : null;
};
nt.prototype.tlds = function(t, n) {
  return t = Array.isArray(t) ? t : [t], n ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(u, r, i) {
    return u !== i[r - 1];
  }).reverse(), Bu(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, Bu(this), this);
};
nt.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
nt.prototype.onCompile = function() {
};
const gn = 2147483647, kt = 36, vi = 1, Xn = 26, th = 38, nh = 700, ws = 72, Es = 128, Cs = "-", uh = /^xn--/, rh = /[^\0-\x7F]/, ih = /[\x2E\u3002\uFF0E\uFF61]/g, oh = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Ar = kt - vi, wt = Math.floor, Dr = String.fromCharCode;
function qt(e) {
  throw new RangeError(oh[e]);
}
function ah(e, t) {
  const n = [];
  let u = e.length;
  for (; u--; )
    n[u] = t(e[u]);
  return n;
}
function As(e, t) {
  const n = e.split("@");
  let u = "";
  n.length > 1 && (u = n[0] + "@", e = n[1]), e = e.replace(ih, ".");
  const r = e.split("."), i = ah(r, t).join(".");
  return u + i;
}
function Ds(e) {
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
const sh = (e) => String.fromCodePoint(...e), ch = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : kt;
}, Mo = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, Ss = function(e, t, n) {
  let u = 0;
  for (e = n ? wt(e / nh) : e >> 1, e += wt(e / t); e > Ar * Xn >> 1; u += kt)
    e = wt(e / Ar);
  return wt(u + (Ar + 1) * e / (e + th));
}, Ts = function(e) {
  const t = [], n = e.length;
  let u = 0, r = Es, i = ws, o = e.lastIndexOf(Cs);
  o < 0 && (o = 0);
  for (let a = 0; a < o; ++a)
    e.charCodeAt(a) >= 128 && qt("not-basic"), t.push(e.charCodeAt(a));
  for (let a = o > 0 ? o + 1 : 0; a < n; ) {
    const s = u;
    for (let l = 1, f = kt; ; f += kt) {
      a >= n && qt("invalid-input");
      const h = ch(e.charCodeAt(a++));
      h >= kt && qt("invalid-input"), h > wt((gn - u) / l) && qt("overflow"), u += h * l;
      const b = f <= i ? vi : f >= i + Xn ? Xn : f - i;
      if (h < b)
        break;
      const d = kt - b;
      l > wt(gn / d) && qt("overflow"), l *= d;
    }
    const c = t.length + 1;
    i = Ss(u - s, c, s == 0), wt(u / c) > gn - r && qt("overflow"), r += wt(u / c), u %= c, t.splice(u++, 0, r);
  }
  return String.fromCodePoint(...t);
}, Os = function(e) {
  const t = [];
  e = Ds(e);
  const n = e.length;
  let u = Es, r = 0, i = ws;
  for (const s of e)
    s < 128 && t.push(Dr(s));
  const o = t.length;
  let a = o;
  for (o && t.push(Cs); a < n; ) {
    let s = gn;
    for (const l of e)
      l >= u && l < s && (s = l);
    const c = a + 1;
    s - u > wt((gn - r) / c) && qt("overflow"), r += (s - u) * c, u = s;
    for (const l of e)
      if (l < u && ++r > gn && qt("overflow"), l === u) {
        let f = r;
        for (let h = kt; ; h += kt) {
          const b = h <= i ? vi : h >= i + Xn ? Xn : h - i;
          if (f < b)
            break;
          const d = f - b, g = kt - b;
          t.push(
            Dr(Mo(b + d % g, 0))
          ), f = wt(d / g);
        }
        t.push(Dr(Mo(f, 0))), i = Ss(r, c, a === o), r = 0, ++a;
      }
    ++r, ++u;
  }
  return t.join("");
}, lh = function(e) {
  return As(e, function(t) {
    return uh.test(t) ? Ts(t.slice(4).toLowerCase()) : t;
  });
}, fh = function(e) {
  return As(e, function(t) {
    return rh.test(t) ? "xn--" + Os(t) : t;
  });
}, Fs = {
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
    decode: Ds,
    encode: sh
  },
  decode: Ts,
  encode: Os,
  toASCII: fh,
  toUnicode: lh
}, dh = {
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
}, hh = {
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
}, bh = {
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
}, ph = {
  default: dh,
  zero: hh,
  commonmark: bh
}, mh = /^(vbscript|javascript|file|data):/, gh = /^data:image\/(gif|png|jpeg|webp);/;
function _h(e) {
  const t = e.trim().toLowerCase();
  return mh.test(t) ? gh.test(t) : !0;
}
const Ms = ["http:", "https:", "mailto:"];
function xh(e) {
  const t = bi(e, !0);
  if (t.hostname && (!t.protocol || Ms.indexOf(t.protocol) >= 0))
    try {
      t.hostname = Fs.toASCII(t.hostname);
    } catch {
    }
  return su(hi(t));
}
function vh(e) {
  const t = bi(e, !0);
  if (t.hostname && (!t.protocol || Ms.indexOf(t.protocol) >= 0))
    try {
      t.hostname = Fs.toUnicode(t.hostname);
    } catch {
    }
  return kn(hi(t), kn.defaultChars + "%");
}
function it(e, t) {
  if (!(this instanceof it))
    return new it(e, t);
  t || mi(e) || (t = e || {}, e = "default"), this.inline = new lu(), this.block = new nr(), this.core = new _i(), this.renderer = new Fn(), this.linkify = new nt(), this.validateLink = _h, this.normalizeLink = xh, this.normalizeLinkText = vh, this.utils = kd, this.helpers = er({}, Ad), this.options = {}, this.configure(e), t && this.set(t);
}
it.prototype.set = function(e) {
  return er(this.options, e), this;
};
it.prototype.configure = function(e) {
  const t = this;
  if (mi(e)) {
    const n = e;
    if (e = ph[n], !e)
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
function yh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sr, Ro;
function kh() {
  if (Ro) return Sr;
  Ro = 1;
  function e(p) {
    return p instanceof Map ? p.clear = p.delete = p.set = function() {
      throw new Error("map is read-only");
    } : p instanceof Set && (p.add = p.clear = p.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(p), Object.getOwnPropertyNames(p).forEach((E) => {
      const S = p[E], j = typeof S;
      (j === "object" || j === "function") && !Object.isFrozen(S) && e(S);
    }), p;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(E) {
      E.data === void 0 && (E.data = {}), this.data = E.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(p) {
    return p.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function u(p, ...E) {
    const S = /* @__PURE__ */ Object.create(null);
    for (const j in p)
      S[j] = p[j];
    return E.forEach(function(j) {
      for (const _e in j)
        S[_e] = j[_e];
    }), /** @type {T} */
    S;
  }
  const r = "</span>", i = (p) => !!p.scope, o = (p, { prefix: E }) => {
    if (p.startsWith("language:"))
      return p.replace("language:", "language-");
    if (p.includes(".")) {
      const S = p.split(".");
      return [
        `${E}${S.shift()}`,
        ...S.map((j, _e) => `${j}${"_".repeat(_e + 1)}`)
      ].join(" ");
    }
    return `${E}${p}`;
  };
  class a {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(E, S) {
      this.buffer = "", this.classPrefix = S.classPrefix, E.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(E) {
      this.buffer += n(E);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(E) {
      if (!i(E)) return;
      const S = o(
        E.scope,
        { prefix: this.classPrefix }
      );
      this.span(S);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(E) {
      i(E) && (this.buffer += r);
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
    span(E) {
      this.buffer += `<span class="${E}">`;
    }
  }
  const s = (p = {}) => {
    const E = { children: [] };
    return Object.assign(E, p), E;
  };
  class c {
    constructor() {
      this.rootNode = s(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(E) {
      this.top.children.push(E);
    }
    /** @param {string} scope */
    openNode(E) {
      const S = s({ scope: E });
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
    walk(E) {
      return this.constructor._walk(E, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(E, S) {
      return typeof S == "string" ? E.addText(S) : S.children && (E.openNode(S), S.children.forEach((j) => this._walk(E, j)), E.closeNode(S)), E;
    }
    /**
     * @param {Node} node
     */
    static _collapse(E) {
      typeof E != "string" && E.children && (E.children.every((S) => typeof S == "string") ? E.children = [E.children.join("")] : E.children.forEach((S) => {
        c._collapse(S);
      }));
    }
  }
  class l extends c {
    /**
     * @param {*} options
     */
    constructor(E) {
      super(), this.options = E;
    }
    /**
     * @param {string} text
     */
    addText(E) {
      E !== "" && this.add(E);
    }
    /** @param {string} scope */
    startScope(E) {
      this.openNode(E);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(E, S) {
      const j = E.root;
      S && (j.scope = `language:${S}`), this.add(j);
    }
    toHTML() {
      return new a(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function f(p) {
    return p ? typeof p == "string" ? p : p.source : null;
  }
  function h(p) {
    return g("(?=", p, ")");
  }
  function b(p) {
    return g("(?:", p, ")*");
  }
  function d(p) {
    return g("(?:", p, ")?");
  }
  function g(...p) {
    return p.map((S) => f(S)).join("");
  }
  function m(p) {
    const E = p[p.length - 1];
    return typeof E == "object" && E.constructor === Object ? (p.splice(p.length - 1, 1), E) : {};
  }
  function A(...p) {
    return "(" + (m(p).capture ? "" : "?:") + p.map((j) => f(j)).join("|") + ")";
  }
  function _(p) {
    return new RegExp(p.toString() + "|").exec("").length - 1;
  }
  function w(p, E) {
    const S = p && p.exec(E);
    return S && S.index === 0;
  }
  const v = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function k(p, { joinWith: E }) {
    let S = 0;
    return p.map((j) => {
      S += 1;
      const _e = S;
      let xe = f(j), R = "";
      for (; xe.length > 0; ) {
        const M = v.exec(xe);
        if (!M) {
          R += xe;
          break;
        }
        R += xe.substring(0, M.index), xe = xe.substring(M.index + M[0].length), M[0][0] === "\\" && M[1] ? R += "\\" + String(Number(M[1]) + _e) : (R += M[0], M[0] === "(" && S++);
      }
      return R;
    }).map((j) => `(${j})`).join(E);
  }
  const y = /\b\B/, O = "[a-zA-Z]\\w*", P = "[a-zA-Z_]\\w*", H = "\\b\\d+(\\.\\d+)?", le = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", re = "\\b(0b[01]+)", Ce = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Ie = (p = {}) => {
    const E = /^#![ ]*\//;
    return p.binary && (p.begin = g(
      E,
      /.*\b/,
      p.binary,
      /\b.*/
    )), u({
      scope: "meta",
      begin: E,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (S, j) => {
        S.index !== 0 && j.ignoreMatch();
      }
    }, p);
  }, be = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, X = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [be]
  }, De = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [be]
  }, Kt = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, L = function(p, E, S = {}) {
    const j = u(
      {
        scope: "comment",
        begin: p,
        end: E,
        contains: []
      },
      S
    );
    j.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const _e = A(
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
    return j.contains.push(
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
          _e,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), j;
  }, V = L("//", "$"), ne = L("/\\*", "\\*/"), ke = L("#", "$"), K = {
    scope: "number",
    begin: H,
    relevance: 0
  }, ie = {
    scope: "number",
    begin: le,
    relevance: 0
  }, fe = {
    scope: "number",
    begin: re,
    relevance: 0
  }, ge = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      be,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [be]
      }
    ]
  }, Pe = {
    scope: "title",
    begin: O,
    relevance: 0
  }, Xe = {
    scope: "title",
    begin: P,
    relevance: 0
  }, pt = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + P,
    relevance: 0
  };
  var It = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: X,
    BACKSLASH_ESCAPE: be,
    BINARY_NUMBER_MODE: fe,
    BINARY_NUMBER_RE: re,
    COMMENT: L,
    C_BLOCK_COMMENT_MODE: ne,
    C_LINE_COMMENT_MODE: V,
    C_NUMBER_MODE: ie,
    C_NUMBER_RE: le,
    END_SAME_AS_BEGIN: function(p) {
      return Object.assign(
        p,
        {
          /** @type {ModeCallback} */
          "on:begin": (E, S) => {
            S.data._beginMatch = E[1];
          },
          /** @type {ModeCallback} */
          "on:end": (E, S) => {
            S.data._beginMatch !== E[1] && S.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: ke,
    IDENT_RE: O,
    MATCH_NOTHING_RE: y,
    METHOD_GUARD: pt,
    NUMBER_MODE: K,
    NUMBER_RE: H,
    PHRASAL_WORDS_MODE: Kt,
    QUOTE_STRING_MODE: De,
    REGEXP_MODE: ge,
    RE_STARTERS_RE: Ce,
    SHEBANG: Ie,
    TITLE_MODE: Pe,
    UNDERSCORE_IDENT_RE: P,
    UNDERSCORE_TITLE_MODE: Xe
  });
  function Rn(p, E) {
    p.input[p.index - 1] === "." && E.ignoreMatch();
  }
  function F(p, E) {
    p.className !== void 0 && (p.scope = p.className, delete p.className);
  }
  function Y(p, E) {
    E && p.beginKeywords && (p.begin = "\\b(" + p.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", p.__beforeBegin = Rn, p.keywords = p.keywords || p.beginKeywords, delete p.beginKeywords, p.relevance === void 0 && (p.relevance = 0));
  }
  function te(p, E) {
    Array.isArray(p.illegal) && (p.illegal = A(...p.illegal));
  }
  function ut(p, E) {
    if (p.match) {
      if (p.begin || p.end) throw new Error("begin & end are not supported with match");
      p.begin = p.match, delete p.match;
    }
  }
  function Dt(p, E) {
    p.relevance === void 0 && (p.relevance = 1);
  }
  const Je = (p, E) => {
    if (!p.beforeMatch) return;
    if (p.starts) throw new Error("beforeMatch cannot be used with starts");
    const S = Object.assign({}, p);
    Object.keys(p).forEach((j) => {
      delete p[j];
    }), p.keywords = S.keywords, p.begin = g(S.beforeMatch, h(S.begin)), p.starts = {
      relevance: 0,
      contains: [
        Object.assign(S, { endsParent: !0 })
      ]
    }, p.relevance = 0, delete S.beforeMatch;
  }, mt = [
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
  ], Nn = "keyword";
  function yi(p, E, S = Nn) {
    const j = /* @__PURE__ */ Object.create(null);
    return typeof p == "string" ? _e(S, p.split(" ")) : Array.isArray(p) ? _e(S, p) : Object.keys(p).forEach(function(xe) {
      Object.assign(
        j,
        yi(p[xe], E, xe)
      );
    }), j;
    function _e(xe, R) {
      E && (R = R.map((M) => M.toLowerCase())), R.forEach(function(M) {
        const z = M.split("|");
        j[z[0]] = [xe, js(z[0], z[1])];
      });
    }
  }
  function js(p, E) {
    return E ? Number(E) : Us(p) ? 0 : 1;
  }
  function Us(p) {
    return mt.includes(p.toLowerCase());
  }
  const ki = {}, Xt = (p) => {
    console.error(p);
  }, wi = (p, ...E) => {
    console.log(`WARN: ${p}`, ...E);
  }, ln = (p, E) => {
    ki[`${p}/${E}`] || (console.log(`Deprecated as of ${p}. ${E}`), ki[`${p}/${E}`] = !0);
  }, fu = new Error();
  function Ei(p, E, { key: S }) {
    let j = 0;
    const _e = p[S], xe = {}, R = {};
    for (let M = 1; M <= E.length; M++)
      R[M + j] = _e[M], xe[M + j] = !0, j += _(E[M - 1]);
    p[S] = R, p[S]._emit = xe, p[S]._multi = !0;
  }
  function $s(p) {
    if (Array.isArray(p.begin)) {
      if (p.skip || p.excludeBegin || p.returnBegin)
        throw Xt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), fu;
      if (typeof p.beginScope != "object" || p.beginScope === null)
        throw Xt("beginScope must be object"), fu;
      Ei(p, p.begin, { key: "beginScope" }), p.begin = k(p.begin, { joinWith: "" });
    }
  }
  function Hs(p) {
    if (Array.isArray(p.end)) {
      if (p.skip || p.excludeEnd || p.returnEnd)
        throw Xt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), fu;
      if (typeof p.endScope != "object" || p.endScope === null)
        throw Xt("endScope must be object"), fu;
      Ei(p, p.end, { key: "endScope" }), p.end = k(p.end, { joinWith: "" });
    }
  }
  function Ws(p) {
    p.scope && typeof p.scope == "object" && p.scope !== null && (p.beginScope = p.scope, delete p.scope);
  }
  function Gs(p) {
    Ws(p), typeof p.beginScope == "string" && (p.beginScope = { _wrap: p.beginScope }), typeof p.endScope == "string" && (p.endScope = { _wrap: p.endScope }), $s(p), Hs(p);
  }
  function Vs(p) {
    function E(R, M) {
      return new RegExp(
        f(R),
        "m" + (p.case_insensitive ? "i" : "") + (p.unicodeRegex ? "u" : "") + (M ? "g" : "")
      );
    }
    class S {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(M, z) {
        z.position = this.position++, this.matchIndexes[this.matchAt] = z, this.regexes.push([z, M]), this.matchAt += _(M) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const M = this.regexes.map((z) => z[1]);
        this.matcherRe = E(k(M, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(M) {
        this.matcherRe.lastIndex = this.lastIndex;
        const z = this.matcherRe.exec(M);
        if (!z)
          return null;
        const Se = z.findIndex((In, or) => or > 0 && In !== void 0), we = this.matchIndexes[Se];
        return z.splice(0, Se), Object.assign(z, we);
      }
    }
    class j {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(M) {
        if (this.multiRegexes[M]) return this.multiRegexes[M];
        const z = new S();
        return this.rules.slice(M).forEach(([Se, we]) => z.addRule(Se, we)), z.compile(), this.multiRegexes[M] = z, z;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(M, z) {
        this.rules.push([M, z]), z.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(M) {
        const z = this.getMatcher(this.regexIndex);
        z.lastIndex = this.lastIndex;
        let Se = z.exec(M);
        if (this.resumingScanAtSamePosition() && !(Se && Se.index === this.lastIndex)) {
          const we = this.getMatcher(0);
          we.lastIndex = this.lastIndex + 1, Se = we.exec(M);
        }
        return Se && (this.regexIndex += Se.position + 1, this.regexIndex === this.count && this.considerAll()), Se;
      }
    }
    function _e(R) {
      const M = new j();
      return R.contains.forEach((z) => M.addRule(z.begin, { rule: z, type: "begin" })), R.terminatorEnd && M.addRule(R.terminatorEnd, { type: "end" }), R.illegal && M.addRule(R.illegal, { type: "illegal" }), M;
    }
    function xe(R, M) {
      const z = (
        /** @type CompiledMode */
        R
      );
      if (R.isCompiled) return z;
      [
        F,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        ut,
        Gs,
        Je
      ].forEach((we) => we(R, M)), p.compilerExtensions.forEach((we) => we(R, M)), R.__beforeBegin = null, [
        Y,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        te,
        // default to 1 relevance if not specified
        Dt
      ].forEach((we) => we(R, M)), R.isCompiled = !0;
      let Se = null;
      return typeof R.keywords == "object" && R.keywords.$pattern && (R.keywords = Object.assign({}, R.keywords), Se = R.keywords.$pattern, delete R.keywords.$pattern), Se = Se || /\w+/, R.keywords && (R.keywords = yi(R.keywords, p.case_insensitive)), z.keywordPatternRe = E(Se, !0), M && (R.begin || (R.begin = /\B|\b/), z.beginRe = E(z.begin), !R.end && !R.endsWithParent && (R.end = /\B|\b/), R.end && (z.endRe = E(z.end)), z.terminatorEnd = f(z.end) || "", R.endsWithParent && M.terminatorEnd && (z.terminatorEnd += (R.end ? "|" : "") + M.terminatorEnd)), R.illegal && (z.illegalRe = E(
        /** @type {RegExp | string} */
        R.illegal
      )), R.contains || (R.contains = []), R.contains = [].concat(...R.contains.map(function(we) {
        return Zs(we === "self" ? R : we);
      })), R.contains.forEach(function(we) {
        xe(
          /** @type Mode */
          we,
          z
        );
      }), R.starts && xe(R.starts, M), z.matcher = _e(z), z;
    }
    if (p.compilerExtensions || (p.compilerExtensions = []), p.contains && p.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return p.classNameAliases = u(p.classNameAliases || {}), xe(
      /** @type Mode */
      p
    );
  }
  function Ci(p) {
    return p ? p.endsWithParent || Ci(p.starts) : !1;
  }
  function Zs(p) {
    return p.variants && !p.cachedVariants && (p.cachedVariants = p.variants.map(function(E) {
      return u(p, { variants: null }, E);
    })), p.cachedVariants ? p.cachedVariants : Ci(p) ? u(p, { starts: p.starts ? u(p.starts) : null }) : Object.isFrozen(p) ? u(p) : p;
  }
  var Ys = "11.11.1";
  class Ks extends Error {
    constructor(E, S) {
      super(E), this.name = "HTMLInjectionError", this.html = S;
    }
  }
  const ir = n, Ai = u, Di = Symbol("nomatch"), Xs = 7, Si = function(p) {
    const E = /* @__PURE__ */ Object.create(null), S = /* @__PURE__ */ Object.create(null), j = [];
    let _e = !0;
    const xe = "Could not find the language '{}', did you forget to load/include a language module?", R = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let M = {
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
      return M.noHighlightRe.test(D);
    }
    function Se(D) {
      let I = D.className + " ";
      I += D.parentNode ? D.parentNode.className : "";
      const Z = M.languageDetectRe.exec(I);
      if (Z) {
        const oe = Pt(Z[1]);
        return oe || (wi(xe.replace("{}", Z[1])), wi("Falling back to no-highlight mode for this block.", D)), oe ? Z[1] : "no-highlight";
      }
      return I.split(/\s+/).find((oe) => z(oe) || Pt(oe));
    }
    function we(D, I, Z) {
      let oe = "", Ae = "";
      typeof I == "object" ? (oe = D, Z = I.ignoreIllegals, Ae = I.language) : (ln("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ln("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), Ae = D, oe = I), Z === void 0 && (Z = !0);
      const ot = {
        code: oe,
        language: Ae
      };
      hu("before:highlight", ot);
      const Lt = ot.result ? ot.result : In(ot.language, ot.code, Z);
      return Lt.code = ot.code, hu("after:highlight", Lt), Lt;
    }
    function In(D, I, Z, oe) {
      const Ae = /* @__PURE__ */ Object.create(null);
      function ot(T, N) {
        return T.keywords[N];
      }
      function Lt() {
        if (!U.keywords) {
          Re.addText(ae);
          return;
        }
        let T = 0;
        U.keywordPatternRe.lastIndex = 0;
        let N = U.keywordPatternRe.exec(ae), G = "";
        for (; N; ) {
          G += ae.substring(T, N.index);
          const J = _t.case_insensitive ? N[0].toLowerCase() : N[0], Le = ot(U, J);
          if (Le) {
            const [St, bc] = Le;
            if (Re.addText(G), G = "", Ae[J] = (Ae[J] || 0) + 1, Ae[J] <= Xs && (mu += bc), St.startsWith("_"))
              G += N[0];
            else {
              const pc = _t.classNameAliases[St] || St;
              gt(N[0], pc);
            }
          } else
            G += N[0];
          T = U.keywordPatternRe.lastIndex, N = U.keywordPatternRe.exec(ae);
        }
        G += ae.substring(T), Re.addText(G);
      }
      function bu() {
        if (ae === "") return;
        let T = null;
        if (typeof U.subLanguage == "string") {
          if (!E[U.subLanguage]) {
            Re.addText(ae);
            return;
          }
          T = In(U.subLanguage, ae, !0, Pi[U.subLanguage]), Pi[U.subLanguage] = /** @type {CompiledMode} */
          T._top;
        } else
          T = ar(ae, U.subLanguage.length ? U.subLanguage : null);
        U.relevance > 0 && (mu += T.relevance), Re.__addSublanguage(T._emitter, T.language);
      }
      function Qe() {
        U.subLanguage != null ? bu() : Lt(), ae = "";
      }
      function gt(T, N) {
        T !== "" && (Re.startScope(N), Re.addText(T), Re.endScope());
      }
      function Mi(T, N) {
        let G = 1;
        const J = N.length - 1;
        for (; G <= J; ) {
          if (!T._emit[G]) {
            G++;
            continue;
          }
          const Le = _t.classNameAliases[T[G]] || T[G], St = N[G];
          Le ? gt(St, Le) : (ae = St, Lt(), ae = ""), G++;
        }
      }
      function Ri(T, N) {
        return T.scope && typeof T.scope == "string" && Re.openNode(_t.classNameAliases[T.scope] || T.scope), T.beginScope && (T.beginScope._wrap ? (gt(ae, _t.classNameAliases[T.beginScope._wrap] || T.beginScope._wrap), ae = "") : T.beginScope._multi && (Mi(T.beginScope, N), ae = "")), U = Object.create(T, { parent: { value: U } }), U;
      }
      function Ni(T, N, G) {
        let J = w(T.endRe, G);
        if (J) {
          if (T["on:end"]) {
            const Le = new t(T);
            T["on:end"](N, Le), Le.isMatchIgnored && (J = !1);
          }
          if (J) {
            for (; T.endsParent && T.parent; )
              T = T.parent;
            return T;
          }
        }
        if (T.endsWithParent)
          return Ni(T.parent, N, G);
      }
      function cc(T) {
        return U.matcher.regexIndex === 0 ? (ae += T[0], 1) : (fr = !0, 0);
      }
      function lc(T) {
        const N = T[0], G = T.rule, J = new t(G), Le = [G.__beforeBegin, G["on:begin"]];
        for (const St of Le)
          if (St && (St(T, J), J.isMatchIgnored))
            return cc(N);
        return G.skip ? ae += N : (G.excludeBegin && (ae += N), Qe(), !G.returnBegin && !G.excludeBegin && (ae = N)), Ri(G, T), G.returnBegin ? 0 : N.length;
      }
      function fc(T) {
        const N = T[0], G = I.substring(T.index), J = Ni(U, T, G);
        if (!J)
          return Di;
        const Le = U;
        U.endScope && U.endScope._wrap ? (Qe(), gt(N, U.endScope._wrap)) : U.endScope && U.endScope._multi ? (Qe(), Mi(U.endScope, T)) : Le.skip ? ae += N : (Le.returnEnd || Le.excludeEnd || (ae += N), Qe(), Le.excludeEnd && (ae = N));
        do
          U.scope && Re.closeNode(), !U.skip && !U.subLanguage && (mu += U.relevance), U = U.parent;
        while (U !== J.parent);
        return J.starts && Ri(J.starts, T), Le.returnEnd ? 0 : N.length;
      }
      function dc() {
        const T = [];
        for (let N = U; N !== _t; N = N.parent)
          N.scope && T.unshift(N.scope);
        T.forEach((N) => Re.openNode(N));
      }
      let pu = {};
      function Ii(T, N) {
        const G = N && N[0];
        if (ae += T, G == null)
          return Qe(), 0;
        if (pu.type === "begin" && N.type === "end" && pu.index === N.index && G === "") {
          if (ae += I.slice(N.index, N.index + 1), !_e) {
            const J = new Error(`0 width match regex (${D})`);
            throw J.languageName = D, J.badRule = pu.rule, J;
          }
          return 1;
        }
        if (pu = N, N.type === "begin")
          return lc(N);
        if (N.type === "illegal" && !Z) {
          const J = new Error('Illegal lexeme "' + G + '" for mode "' + (U.scope || "<unnamed>") + '"');
          throw J.mode = U, J;
        } else if (N.type === "end") {
          const J = fc(N);
          if (J !== Di)
            return J;
        }
        if (N.type === "illegal" && G === "")
          return ae += `
`, 1;
        if (lr > 1e5 && lr > N.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return ae += G, G.length;
      }
      const _t = Pt(D);
      if (!_t)
        throw Xt(xe.replace("{}", D)), new Error('Unknown language: "' + D + '"');
      const hc = Vs(_t);
      let cr = "", U = oe || hc;
      const Pi = {}, Re = new M.__emitter(M);
      dc();
      let ae = "", mu = 0, Jt = 0, lr = 0, fr = !1;
      try {
        if (_t.__emitTokens)
          _t.__emitTokens(I, Re);
        else {
          for (U.matcher.considerAll(); ; ) {
            lr++, fr ? fr = !1 : U.matcher.considerAll(), U.matcher.lastIndex = Jt;
            const T = U.matcher.exec(I);
            if (!T) break;
            const N = I.substring(Jt, T.index), G = Ii(N, T);
            Jt = T.index + G;
          }
          Ii(I.substring(Jt));
        }
        return Re.finalize(), cr = Re.toHTML(), {
          language: D,
          value: cr,
          relevance: mu,
          illegal: !1,
          _emitter: Re,
          _top: U
        };
      } catch (T) {
        if (T.message && T.message.includes("Illegal"))
          return {
            language: D,
            value: ir(I),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: T.message,
              index: Jt,
              context: I.slice(Jt - 100, Jt + 100),
              mode: T.mode,
              resultSoFar: cr
            },
            _emitter: Re
          };
        if (_e)
          return {
            language: D,
            value: ir(I),
            illegal: !1,
            relevance: 0,
            errorRaised: T,
            _emitter: Re,
            _top: U
          };
        throw T;
      }
    }
    function or(D) {
      const I = {
        value: ir(D),
        illegal: !1,
        relevance: 0,
        _top: R,
        _emitter: new M.__emitter(M)
      };
      return I._emitter.addText(D), I;
    }
    function ar(D, I) {
      I = I || M.languages || Object.keys(E);
      const Z = or(D), oe = I.filter(Pt).filter(Fi).map(
        (Qe) => In(Qe, D, !1)
      );
      oe.unshift(Z);
      const Ae = oe.sort((Qe, gt) => {
        if (Qe.relevance !== gt.relevance) return gt.relevance - Qe.relevance;
        if (Qe.language && gt.language) {
          if (Pt(Qe.language).supersetOf === gt.language)
            return 1;
          if (Pt(gt.language).supersetOf === Qe.language)
            return -1;
        }
        return 0;
      }), [ot, Lt] = Ae, bu = ot;
      return bu.secondBest = Lt, bu;
    }
    function Js(D, I, Z) {
      const oe = I && S[I] || Z;
      D.classList.add("hljs"), D.classList.add(`language-${oe}`);
    }
    function sr(D) {
      let I = null;
      const Z = Se(D);
      if (z(Z)) return;
      if (hu(
        "before:highlightElement",
        { el: D, language: Z }
      ), D.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", D);
        return;
      }
      if (D.children.length > 0 && (M.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(D)), M.throwUnescapedHTML))
        throw new Ks(
          "One of your code blocks includes unescaped HTML.",
          D.innerHTML
        );
      I = D;
      const oe = I.textContent, Ae = Z ? we(oe, { language: Z, ignoreIllegals: !0 }) : ar(oe);
      D.innerHTML = Ae.value, D.dataset.highlighted = "yes", Js(D, Z, Ae.language), D.result = {
        language: Ae.language,
        // TODO: remove with version 11.0
        re: Ae.relevance,
        relevance: Ae.relevance
      }, Ae.secondBest && (D.secondBest = {
        language: Ae.secondBest.language,
        relevance: Ae.secondBest.relevance
      }), hu("after:highlightElement", { el: D, result: Ae, text: oe });
    }
    function Qs(D) {
      M = Ai(M, D);
    }
    const ec = () => {
      du(), ln("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function tc() {
      du(), ln("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Ti = !1;
    function du() {
      function D() {
        du();
      }
      if (document.readyState === "loading") {
        Ti || window.addEventListener("DOMContentLoaded", D, !1), Ti = !0;
        return;
      }
      document.querySelectorAll(M.cssSelector).forEach(sr);
    }
    function nc(D, I) {
      let Z = null;
      try {
        Z = I(p);
      } catch (oe) {
        if (Xt("Language definition for '{}' could not be registered.".replace("{}", D)), _e)
          Xt(oe);
        else
          throw oe;
        Z = R;
      }
      Z.name || (Z.name = D), E[D] = Z, Z.rawDefinition = I.bind(null, p), Z.aliases && Oi(Z.aliases, { languageName: D });
    }
    function uc(D) {
      delete E[D];
      for (const I of Object.keys(S))
        S[I] === D && delete S[I];
    }
    function rc() {
      return Object.keys(E);
    }
    function Pt(D) {
      return D = (D || "").toLowerCase(), E[D] || E[S[D]];
    }
    function Oi(D, { languageName: I }) {
      typeof D == "string" && (D = [D]), D.forEach((Z) => {
        S[Z.toLowerCase()] = I;
      });
    }
    function Fi(D) {
      const I = Pt(D);
      return I && !I.disableAutodetect;
    }
    function ic(D) {
      D["before:highlightBlock"] && !D["before:highlightElement"] && (D["before:highlightElement"] = (I) => {
        D["before:highlightBlock"](
          Object.assign({ block: I.el }, I)
        );
      }), D["after:highlightBlock"] && !D["after:highlightElement"] && (D["after:highlightElement"] = (I) => {
        D["after:highlightBlock"](
          Object.assign({ block: I.el }, I)
        );
      });
    }
    function oc(D) {
      ic(D), j.push(D);
    }
    function ac(D) {
      const I = j.indexOf(D);
      I !== -1 && j.splice(I, 1);
    }
    function hu(D, I) {
      const Z = D;
      j.forEach(function(oe) {
        oe[Z] && oe[Z](I);
      });
    }
    function sc(D) {
      return ln("10.7.0", "highlightBlock will be removed entirely in v12.0"), ln("10.7.0", "Please use highlightElement now."), sr(D);
    }
    Object.assign(p, {
      highlight: we,
      highlightAuto: ar,
      highlightAll: du,
      highlightElement: sr,
      // TODO: Remove with v12 API
      highlightBlock: sc,
      configure: Qs,
      initHighlighting: ec,
      initHighlightingOnLoad: tc,
      registerLanguage: nc,
      unregisterLanguage: uc,
      listLanguages: rc,
      getLanguage: Pt,
      registerAliases: Oi,
      autoDetection: Fi,
      inherit: Ai,
      addPlugin: oc,
      removePlugin: ac
    }), p.debugMode = function() {
      _e = !1;
    }, p.safeMode = function() {
      _e = !0;
    }, p.versionString = Ys, p.regex = {
      concat: g,
      lookahead: h,
      either: A,
      optional: d,
      anyNumberOfTimes: b
    };
    for (const D in It)
      typeof It[D] == "object" && e(It[D]);
    return Object.assign(p, It), p;
  }, fn = Si({});
  return fn.newInstance = () => Si({}), Sr = fn, fn.HighlightJS = fn, fn.default = fn, Sr;
}
var wh = /* @__PURE__ */ kh();
const qe = /* @__PURE__ */ yh(wh), No = "[A-Za-z$_][0-9A-Za-z$_]*", Eh = [
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
], Ch = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Rs = [
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
], Ns = [
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
], Ah = [
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
], Dh = [].concat(
  Is,
  Rs,
  Ns
);
function Sh(e) {
  const t = e.regex, n = (L, { after: V }) => {
    const ne = "</" + L[0].slice(1);
    return L.input.indexOf(ne, V) !== -1;
  }, u = No, r = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (L, V) => {
      const ne = L[0].length + L.index, ke = L.input[ne];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        ke === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        ke === ","
      ) {
        V.ignoreMatch();
        return;
      }
      ke === ">" && (n(L, { after: ne }) || V.ignoreMatch());
      let K;
      const ie = L.input.substring(ne);
      if (K = ie.match(/^\s*=/)) {
        V.ignoreMatch();
        return;
      }
      if ((K = ie.match(/^\s+extends\s+/)) && K.index === 0) {
        V.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: No,
    keyword: Eh,
    literal: Ch,
    built_in: Dh,
    "variable.language": Ah
  }, s = "[0-9](_?[0-9])*", c = `\\.(${s})`, l = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${l})((${c})|\\.)?|(${c}))[eE][+-]?(${s})\\b` },
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
    keywords: a,
    contains: []
    // defined later
  }, b = {
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
  }, _ = {
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
  }, w = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    b,
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
  h.contains = w.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(w)
  });
  const v = [].concat(_, h.contains), k = v.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(v)
    }
  ]), y = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: k
  }, O = {
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
  }, P = {
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
        ...Rs,
        ...Ns
      ]
    }
  }, H = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, le = {
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
    contains: [y],
    illegal: /%/
  }, re = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function Ce(L) {
    return t.concat("(?!", L.join("|"), ")");
  }
  const Ie = {
    match: t.concat(
      /\b/,
      Ce([
        ...Is,
        "super",
        "import"
      ].map((L) => `${L}\\s*\\(`)),
      u,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, be = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(u, /(?![0-9A-Za-z$_(])/)
    )),
    end: u,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, X = {
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
      y
    ]
  }, De = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", Kt = {
    match: [
      /const|var|let/,
      /\s+/,
      u,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(De)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      y
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: k, CLASS_REFERENCE: P },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      H,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      b,
      d,
      g,
      m,
      _,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      P,
      {
        scope: "attr",
        match: u + t.lookahead(":"),
        relevance: 0
      },
      Kt,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          _,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: De,
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
                    keywords: a,
                    contains: k
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
      le,
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
          y,
          e.inherit(e.TITLE_MODE, { begin: u, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      be,
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
        contains: [y]
      },
      Ie,
      re,
      O,
      X,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Th(e) {
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
function Ps(e) {
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
  }), a = e.inherit(e.APOS_STRING_MODE, { className: "string" }), s = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), c = {
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
          s,
          a,
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
                  s,
                  a
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
              s
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
], Mh = [
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
  ...Fh,
  ...Mh
], Nh = [
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
].sort().reverse(), Ih = [
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
].sort().reverse(), Lh = [
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
function Bh(e) {
  const t = e.regex, n = Oh(e), u = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, r = "and or not only", i = /@-?\w[\w]*(-\w+)*/, o = "[a-zA-Z-][a-zA-Z0-9_-]*", a = [
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
          { begin: ":(" + Ih.join("|") + ")" },
          { begin: ":(:)?(" + Ph.join("|") + ")" }
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
        begin: "\\b(" + Lh.join("|") + ")\\b"
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
          ...a,
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
              ...a,
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
              attribute: Nh.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...a,
              n.CSS_NUMBER_MODE
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
function zh(e) {
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
  }, a = /[A-Za-z][A-Za-z0-9+.-]*/, s = {
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
        begin: t.concat(/\[.+?\]\(/, a, /:\/\/.*?\)/),
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
  let b = [
    n,
    s
  ];
  return [
    c,
    l,
    f,
    h
  ].forEach((A) => {
    A.contains = A.contains.concat(b);
  }), b = b.concat(c, l), {
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
            contains: b
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: b
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
        contains: b,
        end: "$"
      },
      r,
      u,
      s,
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
  }, a = {
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
  }, s = {
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
    contains: e.QUOTE_STRING_MODE.contains.concat(s)
  }), f = {
    begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
    end: /[ \t]*(\w+)\b/,
    contains: e.QUOTE_STRING_MODE.contains.concat(s),
    "on:begin": (be, X) => {
      X.data._beginMatch = be[1] || be[2];
    },
    "on:end": (be, X) => {
      X.data._beginMatch !== be[1] && X.ignoreMatch();
    }
  }, h = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  }), b = `[ 	
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
  ], A = [
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
  ], _ = [
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
  ], v = {
    keyword: A,
    literal: ((be) => {
      const X = [];
      return be.forEach((De) => {
        X.push(De), De.toLowerCase() === De ? X.push(De.toUpperCase()) : X.push(De.toLowerCase());
      }), X;
    })(m),
    built_in: _
  }, k = (be) => be.map((X) => X.replace(/\|\d+$/, "")), y = { variants: [
    {
      match: [
        /new/,
        t.concat(b, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", k(_).join("\\b|"), "\\b)"),
        r
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, O = t.concat(u, "\\b(?!\\()"), P = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        O
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
        O
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
  ] }, H = {
    scope: "attr",
    match: t.concat(u, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, le = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: v,
    contains: [
      H,
      o,
      P,
      e.C_BLOCK_COMMENT_MODE,
      d,
      g,
      y
    ]
  }, re = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", k(A).join("\\b|"), "|", k(_).join("\\b|"), "\\b)"),
      u,
      t.concat(b, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [le]
  };
  le.contains.push(re);
  const Ce = [
    H,
    P,
    e.C_BLOCK_COMMENT_MODE,
    d,
    g,
    y
  ], Ie = {
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
          ...Ce
        ]
      },
      ...Ce,
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
    keywords: v,
    contains: [
      Ie,
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
      a,
      {
        scope: "variable.language",
        match: /\$this\b/
      },
      o,
      re,
      P,
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
      y,
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
            keywords: v,
            contains: [
              "self",
              Ie,
              o,
              P,
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
function jh(e) {
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
  ], a = [
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
  ], s = [
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
  ], b = l, d = [
    ...c,
    ...s
  ].filter((k) => !l.includes(k)), g = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  }, m = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, A = {
    match: t.concat(/\b/, t.either(...b), /\s*\(/),
    relevance: 0,
    keywords: { built_in: b }
  };
  function _(k) {
    return t.concat(
      /\b/,
      t.either(...k.map((y) => y.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const w = {
    scope: "keyword",
    match: _(h),
    relevance: 0
  };
  function v(k, {
    exceptions: y,
    when: O
  } = {}) {
    const P = O;
    return y = y || [], k.map((H) => H.match(/\|\d+$/) || y.includes(H) ? H : P(H) ? `${H}|0` : H);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: v(d, { when: (k) => k.length < 3 }),
      literal: i,
      type: a,
      built_in: f
    },
    contains: [
      {
        scope: "type",
        match: _(o)
      },
      w,
      A,
      g,
      u,
      r,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      n,
      m
    ]
  };
}
qe.registerLanguage("javascript", Sh);
qe.registerLanguage("json", Th);
qe.registerLanguage("xml", Ps);
qe.registerLanguage("html", Ps);
qe.registerLanguage("css", Bh);
qe.registerLanguage("markdown", zh);
qe.registerLanguage("php", qh);
qe.registerLanguage("sql", jh);
const ct = new it({
  html: !1,
  linkify: !0,
  typographer: !0,
  langPrefix: "language-",
  highlight: function(e, t) {
    try {
      return t && qe.getLanguage(t) ? qe.highlight(e, {
        language: t,
        ignoreIllegals: !0
      }).value : qe.highlightAuto(e, qe.listLanguages()).value;
    } catch {
      return ct.utils.escapeHtml(e);
    }
  }
});
ct.enable(["table", "strikethrough"]);
ct.renderer.rules.code_inline = function(e, t) {
  const n = e[t];
  return `<code class="md-inline-code">${ct.utils.escapeHtml(n.content)}</code>`;
};
ct.renderer.rules.fence = function(e, t) {
  const n = e[t], u = n.info ? n.info.trim() : "", r = n.content || "", i = u.split(/\s+/g)[0] || "";
  let o = "", a = "plaintext";
  try {
    if (i && qe.getLanguage(i))
      a = i, o = qe.highlight(r, {
        language: i,
        ignoreIllegals: !0
      }).value;
    else {
      const c = qe.highlightAuto(r, qe.listLanguages());
      a = c.language || "plaintext", o = c.value;
    }
  } catch {
    o = ct.utils.escapeHtml(r), a = "plaintext";
  }
  const s = ct.utils.escapeHtml(r);
  return `<div class="md-codeblock"><div class="md-codeblock-header"><span class="md-codeblock-lang">${a}</span><button type="button" class="copy-code" data-code="${s}"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span class="copy-label">Copy Code</span></button></div><pre class="md-pre"><code class="hljs language-${a}">${o}</code></pre></div>`;
};
ct.renderer.rules.link_open = function(e, t) {
  const n = e[t], u = n.attrIndex("href");
  if (u >= 0) {
    const r = n.attrs[u][1];
    n.attrs[u][1] = ct.utils.escapeHtml(r);
  }
  return n.attrIndex("target") < 0 && n.attrPush(["target", "_blank"]), n.attrIndex("rel") < 0 && n.attrPush(["rel", "noopener noreferrer"]), ct.renderer.renderToken(e, t, {});
};
function Uh(e) {
  return e ? ct.render(e) : "";
}
const Ls = 6048e5, $h = 864e5, Io = Symbol.for("constructDateFrom");
function Yt(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Io in e ? e[Io](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function bt(e, t) {
  return Yt(t || e, e);
}
let Hh = {};
function rr() {
  return Hh;
}
function Jn(e, t) {
  const n = rr(), u = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, r = bt(e, t?.in), i = r.getDay(), o = (i < u ? 7 : 0) + i - u;
  return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r;
}
function zu(e, t) {
  return Jn(e, { ...t, weekStartsOn: 1 });
}
function Bs(e, t) {
  const n = bt(e, t?.in), u = n.getFullYear(), r = Yt(n, 0);
  r.setFullYear(u + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = zu(r), o = Yt(n, 0);
  o.setFullYear(u, 0, 4), o.setHours(0, 0, 0, 0);
  const a = zu(o);
  return n.getTime() >= i.getTime() ? u + 1 : n.getTime() >= a.getTime() ? u : u - 1;
}
function Po(e) {
  const t = bt(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Wh(e, ...t) {
  const n = Yt.bind(
    null,
    t.find((u) => typeof u == "object")
  );
  return t.map(n);
}
function Lo(e, t) {
  const n = bt(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function Gh(e, t, n) {
  const [u, r] = Wh(
    n?.in,
    e,
    t
  ), i = Lo(u), o = Lo(r), a = +i - Po(i), s = +o - Po(o);
  return Math.round((a - s) / $h);
}
function Vh(e, t) {
  const n = Bs(e, t), u = Yt(e, 0);
  return u.setFullYear(n, 0, 4), u.setHours(0, 0, 0, 0), zu(u);
}
function Zh(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Yh(e) {
  return !(!Zh(e) && typeof e != "number" || isNaN(+bt(e)));
}
function Kh(e, t) {
  const n = bt(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const Xh = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Jh = (e, t, n) => {
  let u;
  const r = Xh[e];
  return typeof r == "string" ? u = r : t === 1 ? u = r.one : u = r.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + u : u + " ago" : u;
};
function Tr(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Qh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, eb = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, tb = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, nb = {
  date: Tr({
    formats: Qh,
    defaultWidth: "full"
  }),
  time: Tr({
    formats: eb,
    defaultWidth: "full"
  }),
  dateTime: Tr({
    formats: tb,
    defaultWidth: "full"
  })
}, ub = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, rb = (e, t, n, u) => ub[e];
function qn(e) {
  return (t, n) => {
    const u = n?.context ? String(n.context) : "standalone";
    let r;
    if (u === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, a = n?.width ? String(n.width) : o;
      r = e.formattingValues[a] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, a = n?.width ? String(n.width) : e.defaultWidth;
      r = e.values[a] || e.values[o];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return r[i];
  };
}
const ib = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ob = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ab = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, sb = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, cb = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, lb = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, fb = (e, t) => {
  const n = Number(e), u = n % 100;
  if (u > 20 || u < 10)
    switch (u % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, db = {
  ordinalNumber: fb,
  era: qn({
    values: ib,
    defaultWidth: "wide"
  }),
  quarter: qn({
    values: ob,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: qn({
    values: ab,
    defaultWidth: "wide"
  }),
  day: qn({
    values: sb,
    defaultWidth: "wide"
  }),
  dayPeriod: qn({
    values: cb,
    defaultWidth: "wide",
    formattingValues: lb,
    defaultFormattingWidth: "wide"
  })
};
function jn(e) {
  return (t, n = {}) => {
    const u = n.width, r = u && e.matchPatterns[u] || e.matchPatterns[e.defaultMatchWidth], i = t.match(r);
    if (!i)
      return null;
    const o = i[0], a = u && e.parsePatterns[u] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(a) ? bb(a, (f) => f.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      hb(a, (f) => f.test(o))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(s) : s, c = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(c)
    ) : c;
    const l = t.slice(o.length);
    return { value: c, rest: l };
  };
}
function hb(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function bb(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function pb(e) {
  return (t, n = {}) => {
    const u = t.match(e.matchPattern);
    if (!u) return null;
    const r = u[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const a = t.slice(r.length);
    return { value: o, rest: a };
  };
}
const mb = /^(\d+)(th|st|nd|rd)?/i, gb = /\d+/i, _b = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, xb = {
  any: [/^b/i, /^(a|c)/i]
}, vb = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, yb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kb = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, wb = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Eb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Cb = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ab = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Db = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Sb = {
  ordinalNumber: pb({
    matchPattern: mb,
    parsePattern: gb,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: jn({
    matchPatterns: _b,
    defaultMatchWidth: "wide",
    parsePatterns: xb,
    defaultParseWidth: "any"
  }),
  quarter: jn({
    matchPatterns: vb,
    defaultMatchWidth: "wide",
    parsePatterns: yb,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: jn({
    matchPatterns: kb,
    defaultMatchWidth: "wide",
    parsePatterns: wb,
    defaultParseWidth: "any"
  }),
  day: jn({
    matchPatterns: Eb,
    defaultMatchWidth: "wide",
    parsePatterns: Cb,
    defaultParseWidth: "any"
  }),
  dayPeriod: jn({
    matchPatterns: Ab,
    defaultMatchWidth: "any",
    parsePatterns: Db,
    defaultParseWidth: "any"
  })
}, Tb = {
  code: "en-US",
  formatDistance: Jh,
  formatLong: nb,
  formatRelative: rb,
  localize: db,
  match: Sb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ob(e, t) {
  const n = bt(e, t?.in);
  return Gh(n, Kh(n)) + 1;
}
function Fb(e, t) {
  const n = bt(e, t?.in), u = +zu(n) - +Vh(n);
  return Math.round(u / Ls) + 1;
}
function zs(e, t) {
  const n = bt(e, t?.in), u = n.getFullYear(), r = rr(), i = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = Yt(t?.in || e, 0);
  o.setFullYear(u + 1, 0, i), o.setHours(0, 0, 0, 0);
  const a = Jn(o, t), s = Yt(t?.in || e, 0);
  s.setFullYear(u, 0, i), s.setHours(0, 0, 0, 0);
  const c = Jn(s, t);
  return +n >= +a ? u + 1 : +n >= +c ? u : u - 1;
}
function Mb(e, t) {
  const n = rr(), u = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, r = zs(e, t), i = Yt(t?.in || e, 0);
  return i.setFullYear(r, 0, u), i.setHours(0, 0, 0, 0), Jn(i, t);
}
function Rb(e, t) {
  const n = bt(e, t?.in), u = +Jn(n, t) - +Mb(n, t);
  return Math.round(u / Ls) + 1;
}
function Q(e, t) {
  const n = e < 0 ? "-" : "", u = Math.abs(e).toString().padStart(t, "0");
  return n + u;
}
const Bt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), u = n > 0 ? n : 1 - n;
    return Q(t === "yy" ? u % 100 : u, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Q(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Q(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Q(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Q(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Q(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Q(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, u = e.getMilliseconds(), r = Math.trunc(
      u * Math.pow(10, n - 3)
    );
    return Q(r, t.length);
  }
}, pn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Bo = {
  // Era
  G: function(e, t, n) {
    const u = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(u, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(u, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(u, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const u = e.getFullYear(), r = u > 0 ? u : 1 - u;
      return n.ordinalNumber(r, { unit: "year" });
    }
    return Bt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, u) {
    const r = zs(e, u), i = r > 0 ? r : 1 - r;
    if (t === "YY") {
      const o = i % 100;
      return Q(o, 2);
    }
    return t === "Yo" ? n.ordinalNumber(i, { unit: "year" }) : Q(i, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Bs(e);
    return Q(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Q(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const u = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(u);
      // 01, 02, 03, 04
      case "QQ":
        return Q(u, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(u, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(u, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(u, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(u, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const u = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(u);
      // 01, 02, 03, 04
      case "qq":
        return Q(u, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(u, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(u, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(u, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(u, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const u = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Bt.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(u + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(u, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(u, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(u, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const u = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(u + 1);
      // 01, 02, ..., 12
      case "LL":
        return Q(u + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(u + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(u, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(u, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(u, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, u) {
    const r = Rb(e, u);
    return t === "wo" ? n.ordinalNumber(r, { unit: "week" }) : Q(r, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const u = Fb(e);
    return t === "Io" ? n.ordinalNumber(u, { unit: "week" }) : Q(u, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Bt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const u = Ob(e);
    return t === "Do" ? n.ordinalNumber(u, { unit: "dayOfYear" }) : Q(u, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const u = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(u, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(u, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(u, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(u, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, u) {
    const r = e.getDay(), i = (r - u.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(i);
      // Padded numerical value
      case "ee":
        return Q(i, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(i, { unit: "day" });
      case "eee":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, u) {
    const r = e.getDay(), i = (r - u.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(i);
      // Padded numerical value
      case "cc":
        return Q(i, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(i, { unit: "day" });
      case "ccc":
        return n.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(r, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(r, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const u = e.getDay(), r = u === 0 ? 7 : u;
    switch (t) {
      // 2
      case "i":
        return String(r);
      // 02
      case "ii":
        return Q(r, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(r, { unit: "day" });
      // Tue
      case "iii":
        return n.day(u, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(u, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(u, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(u, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const u = e.getHours();
    let r;
    switch (u === 12 ? r = pn.noon : u === 0 ? r = pn.midnight : r = u / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const u = e.getHours();
    let r;
    switch (u >= 17 ? r = pn.evening : u >= 12 ? r = pn.afternoon : u >= 4 ? r = pn.morning : r = pn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let u = e.getHours() % 12;
      return u === 0 && (u = 12), n.ordinalNumber(u, { unit: "hour" });
    }
    return Bt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Bt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const u = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(u, { unit: "hour" }) : Q(u, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let u = e.getHours();
    return u === 0 && (u = 24), t === "ko" ? n.ordinalNumber(u, { unit: "hour" }) : Q(u, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Bt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Bt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Bt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const u = e.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return qo(u);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return en(u);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return en(u, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const u = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return qo(u);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return en(u);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return en(u, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const u = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + zo(u, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + en(u, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const u = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + zo(u, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + en(u, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const u = Math.trunc(+e / 1e3);
    return Q(u, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Q(+e, t.length);
  }
};
function zo(e, t = "") {
  const n = e > 0 ? "-" : "+", u = Math.abs(e), r = Math.trunc(u / 60), i = u % 60;
  return i === 0 ? n + String(r) : n + String(r) + t + Q(i, 2);
}
function qo(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Q(Math.abs(e) / 60, 2) : en(e, t);
}
function en(e, t = "") {
  const n = e > 0 ? "-" : "+", u = Math.abs(e), r = Q(Math.trunc(u / 60), 2), i = Q(u % 60, 2);
  return n + r + t + i;
}
const jo = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, qs = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Nb = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], u = n[1], r = n[2];
  if (!r)
    return jo(e, t);
  let i;
  switch (u) {
    case "P":
      i = t.dateTime({ width: "short" });
      break;
    case "PP":
      i = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      i = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      i = t.dateTime({ width: "full" });
      break;
  }
  return i.replace("{{date}}", jo(u, t)).replace("{{time}}", qs(r, t));
}, Ib = {
  p: qs,
  P: Nb
}, Pb = /^D+$/, Lb = /^Y+$/, Bb = ["D", "DD", "YY", "YYYY"];
function zb(e) {
  return Pb.test(e);
}
function qb(e) {
  return Lb.test(e);
}
function jb(e, t, n) {
  const u = Ub(e, t, n);
  if (console.warn(u), Bb.includes(e)) throw new RangeError(u);
}
function Ub(e, t, n) {
  const u = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${u} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const $b = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Hb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Wb = /^'([^]*?)'?$/, Gb = /''/g, Vb = /[a-zA-Z]/;
function Zb(e, t, n) {
  const u = rr(), r = u.locale ?? Tb, i = u.firstWeekContainsDate ?? u.locale?.options?.firstWeekContainsDate ?? 1, o = u.weekStartsOn ?? u.locale?.options?.weekStartsOn ?? 0, a = bt(e, n?.in);
  if (!Yh(a))
    throw new RangeError("Invalid time value");
  let s = t.match(Hb).map((l) => {
    const f = l[0];
    if (f === "p" || f === "P") {
      const h = Ib[f];
      return h(l, r.formatLong);
    }
    return l;
  }).join("").match($b).map((l) => {
    if (l === "''")
      return { isToken: !1, value: "'" };
    const f = l[0];
    if (f === "'")
      return { isToken: !1, value: Yb(l) };
    if (Bo[f])
      return { isToken: !0, value: l };
    if (f.match(Vb))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + f + "`"
      );
    return { isToken: !1, value: l };
  });
  r.localize.preprocessor && (s = r.localize.preprocessor(a, s));
  const c = {
    firstWeekContainsDate: i,
    weekStartsOn: o,
    locale: r
  };
  return s.map((l) => {
    if (!l.isToken) return l.value;
    const f = l.value;
    (qb(f) || zb(f)) && jb(f, t, String(e));
    const h = Bo[f[0]];
    return h(a, f, r.localize, c);
  }).join("");
}
function Yb(e) {
  const t = e.match(Wb);
  return t ? t[1].replace(Gb, "'") : e;
}
function Kb(e) {
  const t = new Date(e);
  return isNaN(t.getTime()) ? "-" : Zb(t, "dd-MM-yyyy hh:mm a");
}
function Xb(e) {
  if (e === null || typeof e > "u") return "-";
  const t = new Date(e);
  if (isNaN(t.getTime())) return "-";
  const u = Math.floor(((/* @__PURE__ */ new Date()).getTime() - t.getTime()) / (1e3 * 60));
  if (u < 1) return "Just now";
  if (u < 60) return `${u}m ago`;
  const r = Math.floor(u / 60);
  return r < 24 ? `${r}h ago` : Kb(t);
}
function Jb(e, t, n, u, r, i) {
  if (C(t) === "up") {
    B(t, null), n({
      message: u.message,
      feedback: null,
      action: "delete",
      feedback_id: u.message?.feedback?.id ?? null
    });
    return;
  }
  B(t, "up"), B(r, !1), B(i, ""), n({ message: u.message, feedback: "up" });
}
function Qb(e, t, n, u, r, i) {
  if (C(t) === "down") {
    B(t, null), B(n, !1), B(u, ""), r({
      message: i.message,
      feedback: null,
      action: "delete",
      feedback_id: i.message?.feedback?.id ?? null
    });
    return;
  }
  B(t, "down"), B(n, !0);
}
function ep(e, t, n, u, r) {
  t({
    message: n.message,
    feedback: "down",
    comment: C(u)
  }), B(r, !1), B(u, "");
}
function tp(e, t, n, u, r) {
  t({ message: n.message, feedback: "down" }), B(u, !1), B(r, "");
}
var np = /* @__PURE__ */ ce('<img alt="Bot Icon" class="avatar-image svelte-1mbk2rv">'), up = /* @__PURE__ */ ce("<div><!></div>"), rp = /* @__PURE__ */ ce('<div class="text svelte-1mbk2rv"> </div>'), ip = /* @__PURE__ */ ce('<div class="thinking svelte-1mbk2rv"><span class="svelte-1mbk2rv">Thinking</span> <div class="dots-container svelte-1mbk2rv"><span class="dot svelte-1mbk2rv"></span> <span class="dot svelte-1mbk2rv"></span> <span class="dot svelte-1mbk2rv"></span></div></div>'), op = /* @__PURE__ */ ce('<a target="_blank" rel="noopener noreferrer" class="svelte-1mbk2rv"> </a>'), ap = /* @__PURE__ */ ce('<span class="svelte-1mbk2rv"> </span>'), sp = /* @__PURE__ */ ce('<li class="source-item svelte-1mbk2rv"><!></li>'), cp = /* @__PURE__ */ ce('<div class="sources-block svelte-1mbk2rv"><div class="sources-title svelte-1mbk2rv">Sources</div> <ul class="sources-list svelte-1mbk2rv"></ul></div>'), lp = /* @__PURE__ */ ce("<div><!></div> <!>", 1), fp = /* @__PURE__ */ ce('<button title="Positive"><!></button>'), dp = /* @__PURE__ */ ce('<button title="Negative"><!></button>'), hp = /* @__PURE__ */ ce('<div class="feedback-row svelte-1mbk2rv" role="group" aria-label="Message feedback"><!> <!></div>'), bp = /* @__PURE__ */ ce(`<div class="feedback-dialog-overlay svelte-1mbk2rv" role="dialog" aria-modal="true"><div class="feedback-dialog svelte-1mbk2rv" role="document"><div class="feedback-dialog-title svelte-1mbk2rv">We're sorry — can you tell us what went wrong?</div> <textarea class="feedback-textarea svelte-1mbk2rv" placeholder="Optional: add details to help us improve..."></textarea> <div class="feedback-dialog-actions svelte-1mbk2rv"><button class="btn btn-secondary svelte-1mbk2rv">Cancel</button> <button class="btn btn-primary svelte-1mbk2rv">Submit</button></div></div></div>`), pp = /* @__PURE__ */ ce('<div><div><!> <div><div><!></div> <div><span class="timestamp svelte-1mbk2rv"> </span> <!></div></div></div></div> <!>', 1);
const mp = {
  hash: "svelte-1mbk2rv",
  code: `.message-container.svelte-1mbk2rv {display:flex;padding:0.25rem 0;}.human-message.svelte-1mbk2rv {justify-content:flex-end;}.ai-message.svelte-1mbk2rv {justify-content:flex-start;}.message-content.svelte-1mbk2rv {display:flex;align-items:flex-start;gap:0.25rem;max-width:85%;}.human-content.svelte-1mbk2rv {flex-direction:row-reverse;}.ai-content.svelte-1mbk2rv {flex-direction:row;}

  /* Match WidgetView preview: square avatar with rounded-md corners (size-8 equivalent) */.avatar.svelte-1mbk2rv {width:2rem; /* size-8 */height:2rem; /* size-8 */border-radius:0.5rem; /* rounded-md */border-top-right-radius:0.15rem;display:flex;align-items:center;justify-content:center;color:inherit;font-weight:600;flex-shrink:0;background-color:var(--primary-color);overflow:hidden;}.avatar.icon-url.svelte-1mbk2rv {background-color:transparent;overflow:hidden;}.avatar-image.svelte-1mbk2rv {width:100%;height:100%;object-fit:cover;display:block;}

  /* New flex-based body */.message-body.svelte-1mbk2rv {display:flex;flex-direction:column;align-items:flex-start;gap:2px;max-width:100%;}.human-body.svelte-1mbk2rv {align-items:flex-end;}.ai-body.svelte-1mbk2rv {align-items:flex-start;}.bubble.svelte-1mbk2rv {padding:0.5rem;border-radius:0.5rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);line-height:1.5;display:inline-flex;flex-direction:column;background-color:var(--message-color);color:var(--text-color);max-width:85%; /* reduce message width to fit better in smaller widget */position:relative;
    /* 0.92rem ≈ 14.7px -> use 15px */font-size:15px;}.human-bubble.svelte-1mbk2rv {border-top-right-radius:0.15rem;}.ai-bubble.svelte-1mbk2rv {border-top-left-radius:0.15rem;}.text.svelte-1mbk2rv {white-space:pre-wrap;word-break:break-word;margin:0;padding:0;}.markdown.svelte-1mbk2rv {width:100%;}.meta-row.svelte-1mbk2rv {display:flex;width:100%;
    /* Reserve space for the timestamp so revealing it doesn't shift layout */min-height:10px; /* reserve approx line-height of timestamp */align-items:center;opacity:1;margin-top:2px;
    /* keep it in flow (visibility on/off only affects hit-testing), don't change height */visibility:visible;transition:opacity 120ms ease;}.human-meta.svelte-1mbk2rv {justify-content:flex-end;}.ai-meta.svelte-1mbk2rv {justify-content:flex-start;}.timestamp.svelte-1mbk2rv {font-size:0.625rem;line-height:1;color:#6b7280;}

  @keyframes svelte-1mbk2rv-bounce {
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
    /* 0.875em of parent (~15px) ≈ 13px */font-size:13px;color:#1f2937;border:1px solid #e5e7eb;}.message-markdown .md-codeblock {margin:0.5rem 0;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;overflow:visible;}.message-markdown .md-codeblock-header {display:flex;align-items:center;justify-content:space-between;padding:0.375rem 0.75rem;background:#f8fafc;border-bottom:1px solid #e5e7eb;}.message-markdown .md-codeblock-lang {display:inline-block;border-radius:0.25rem;background:#dbeafe; /* blue-100 */color:#1d4ed8; /* blue-700 */font-weight:600;padding:0.25rem 0.5rem;text-transform:uppercase;letter-spacing:0.03em;font-size:10px;}.message-markdown .copy-code {-webkit-appearance:none;appearance:none;border:none;border-radius:0.25rem;background:#0f172a; /* slate-900 */color:#ffffff;padding:0.25rem 0.5rem;display:inline-flex;align-items:center;gap:0.25rem;cursor:pointer;font-size:12px;}.message-markdown .copy-code:hover {background:#1e293b;}.message-markdown .copy-code:focus-visible {outline:2px solid #93c5fd; /* blue-300 */outline-offset:2px;}.message-markdown .copy-code:active {transform:scale(0.98);}.message-markdown .md-pre {overflow-x:auto;font-size:15px;line-height:1.625;margin:0; /* remove default ~1em margin around pre */border-bottom-left-radius:0.5rem;border-bottom-right-radius:0.5rem;}.message-markdown pre {overflow-x:auto; /* overflow-x-auto */max-width:100%; /* max-w-full */background-color:#f8fafc; /* light bg similar to Vue */}.message-markdown pre code {color:#1f2937;white-space:pre; /* ensure no wrapping inside code blocks */word-break:normal;overflow-wrap:normal;}.message-markdown img {max-width:100%;height:auto;}.streaming.svelte-1mbk2rv {
    animation: svelte-1mbk2rv-pulse 2s infinite ease-in-out;}
  @keyframes svelte-1mbk2rv-pulse {
    0%,
    100% {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    50% {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }.thinking.svelte-1mbk2rv {display:flex;align-items:center;gap:0.5rem;color:#1f2937;font-size:0.95rem;padding:0.25rem 0;}.sources-block.svelte-1mbk2rv {border-top:1px solid #e5e7eb;margin-top:8px;padding-top:6px;}.sources-title.svelte-1mbk2rv {font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#374151;margin-bottom:4px;}.sources-list.svelte-1mbk2rv {list-style:disc;padding-left:1.1rem;margin:0;display:flex;flex-direction:column;gap:2px;}.source-item.svelte-1mbk2rv a:where(.svelte-1mbk2rv) {font-size:11px;color:#2563eb;text-decoration:none;word-break:break-all;}.source-item.svelte-1mbk2rv a:where(.svelte-1mbk2rv):hover {text-decoration:underline;}.dots-container.svelte-1mbk2rv {display:flex;align-items:center;gap:0.25rem;}.dot.svelte-1mbk2rv {width:4px;height:4px;background-color:#1f2937;border-radius:50%;display:inline-block;
    animation: svelte-1mbk2rv-bounce 1.4s infinite ease-in-out both;}.dot.svelte-1mbk2rv:nth-child(1) {animation-delay:-0.32s;}.dot.svelte-1mbk2rv:nth-child(2) {animation-delay:-0.16s;}.typing-animation.svelte-1mbk2rv {
    animation: svelte-1mbk2rv-typing 0.5s ease-in-out;}
  @keyframes svelte-1mbk2rv-typing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Feedback buttons (shown with timestamp on hover) */.feedback-row.svelte-1mbk2rv {display:inline-flex;gap:6px;margin-left:8px;align-items:center;}.feedback-btn.svelte-1mbk2rv {-webkit-appearance:none;appearance:none;border:none;background:transparent;padding:4px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:#9ca3af; /* gray-400 */}.feedback-btn.svelte-1mbk2rv:hover {background:rgba(0, 0, 0, 0.04);color:#374151; /* gray-700 */}.feedback-btn.selected.svelte-1mbk2rv {background:rgba(37, 99, 235, 0.12); /* blue-100 */color:#2563eb; /* blue-600 */}.feedback-btn.down.selected.svelte-1mbk2rv {background:rgba(239, 68, 68, 0.1); /* red-100 */color:#dc2626; /* red-600 */}

  /* Feedback dialog overlay and box */.feedback-dialog-overlay.svelte-1mbk2rv {position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(15, 23, 42, 0.5);z-index:99999;padding:20px;}.feedback-dialog.svelte-1mbk2rv {width:100%;max-width:720px;background:#ffffff;border-radius:10px;padding:18px;box-shadow:0 8px 30px rgba(2, 6, 23, 0.2);display:flex;flex-direction:column;gap:12px;box-sizing:border-box;}.feedback-dialog-title.svelte-1mbk2rv {font-weight:600;color:#111827;}.feedback-textarea.svelte-1mbk2rv {width:100%;max-width:100%;box-sizing:border-box;min-height:100px;resize:vertical;border:1px solid #e5e7eb;border-radius:8px;padding:10px;font-size:14px;color:#111827;background:#ffffff;}.feedback-dialog-actions.svelte-1mbk2rv {display:flex;justify-content:flex-end;gap:8px;}.btn.svelte-1mbk2rv {padding:8px 12px;border-radius:8px;border:none;cursor:pointer;font-weight:600;}.btn-primary.svelte-1mbk2rv {background:#2563eb;color:white;}.btn-secondary.svelte-1mbk2rv {background:transparent;color:#374151;}`
};
function gp(e, t) {
  An(t, !0), Gu(e, mp);
  const n = /* @__PURE__ */ Ge(() => t.message.content), u = /* @__PURE__ */ Ge(() => t.message.role), r = /* @__PURE__ */ Ge(() => !!t.message.isStreaming), i = /* @__PURE__ */ Ge(() => C(r) && C(n).length > 0), o = /* @__PURE__ */ Ge(() => t.message.sources), a = { Bot: $r, BotMessageSquare: rs, Sparkle: is, Sparkles: os }, s = t.botIcon && (t.botIcon.startsWith("http://") || t.botIcon.startsWith("https://")), c = !s && t.botIcon && a[t.botIcon] ? a[t.botIcon] : $r, l = /* @__PURE__ */ Ge(() => C(u) === "ai" ? Uh(C(n)) : C(n));
  let f = /* @__PURE__ */ ve(null), h = /* @__PURE__ */ ve(!1), b = /* @__PURE__ */ ve("");
  function d(L) {
    try {
      const V = new CustomEvent("message-feedback", { detail: L });
      document.dispatchEvent(V);
    } catch {
      console.log("feedback", L);
    }
  }
  function g(L) {
    const ne = L.target?.closest?.(".copy-code");
    if (!ne) return;
    const ke = ne.getAttribute("data-code") || "", K = ne.querySelector(".copy-label"), ie = K ? K.textContent : "";
    navigator?.clipboard?.writeText && navigator.clipboard.writeText(ke).then(() => {
      K && (K.textContent = "Copied"), setTimeout(
        () => {
          K && (K.textContent = ie || "Copy Code");
        },
        1500
      );
    }).catch(() => {
      K && (K.textContent = "Failed"), setTimeout(
        () => {
          K && (K.textContent = ie || "Copy Code");
        },
        1500
      );
    });
  }
  let m = /* @__PURE__ */ ve(null);
  Ot(() => {
    const L = C(m);
    if (!L) return;
    const V = (ne) => g(ne);
    return L.addEventListener("click", V), () => {
      L.removeEventListener("click", V);
    };
  }), Ot(() => {
    const L = t.message?.feedback;
    L && (B(f, L.reaction === "positive" ? "up" : "down", !0), B(h, !1));
  });
  var A = pp(), _ = ye(A), w = W(_), v = W(w);
  {
    var k = (L) => {
      var V = up();
      at(V, 1, `avatar ${s ? "icon-url" : ""}`, "svelte-1mbk2rv");
      var ne = W(V);
      {
        var ke = (ie) => {
          var fe = np();
          pe(() => Be(fe, "src", t.botIcon)), q(ie, fe);
        }, K = (ie, fe) => {
          {
            var ge = (Pe) => {
              c(Pe, {
                size: 20,
                strokeWidth: 2,
                get color() {
                  return t.onPrimaryColor;
                }
              });
            };
            Ee(
              ie,
              (Pe) => {
                c && Pe(ge);
              },
              fe
            );
          }
        };
        Ee(ne, (ie) => {
          s ? ie(ke) : ie(K, !1);
        });
      }
      pe(() => st(V, `background-color: ${(s ? "transparent" : t.primaryColor) ?? ""}; color: ${(s ? "inherit" : t.onPrimaryColor) ?? ""}`)), q(L, V);
    };
    Ee(v, (L) => {
      C(u) === "ai" && t.botIcon && L(k);
    });
  }
  var y = de(v, 2), O = W(y), P = W(O);
  {
    var H = (L) => {
      var V = rp(), ne = W(V);
      pe(() => nn(ne, C(n))), q(L, V);
    }, le = (L, V) => {
      {
        var ne = (K) => {
          var ie = ip();
          q(K, ie);
        }, ke = (K) => {
          var ie = lp(), fe = ye(ie), ge = W(fe);
          El(ge, () => C(l)), ku(fe, (pt) => B(m, pt), () => C(m));
          var Pe = de(fe, 2);
          {
            var Xe = (pt) => {
              var Mn = cp(), It = de(W(Mn), 2);
              Ru(It, 21, () => C(o), si, (Rn, F) => {
                var Y = sp(), te = W(Y);
                {
                  var ut = (Je) => {
                    var mt = op(), Nn = W(mt);
                    pe(() => {
                      Be(mt, "href", C(F).source), nn(Nn, C(F).title || C(F).source);
                    }), q(Je, mt);
                  }, Dt = (Je) => {
                    var mt = ap(), Nn = W(mt);
                    pe(() => nn(Nn, C(F).title || "Untitled")), q(Je, mt);
                  };
                  Ee(te, (Je) => {
                    C(F).source ? Je(ut) : Je(Dt, !1);
                  });
                }
                pe(() => Be(Y, "title", C(F).source || "")), q(Rn, Y);
              }), q(pt, Mn);
            };
            Ee(Pe, (pt) => {
              t.showSources && C(o) && C(o).length > 0 && pt(Xe);
            });
          }
          pe(() => at(fe, 1, `message-markdown markdown ${C(r) ? "typing-animation" : ""}`, "svelte-1mbk2rv")), q(K, ie);
        };
        Ee(
          L,
          (K) => {
            C(r) && !C(i) ? K(ne) : K(ke, !1);
          },
          V
        );
      }
    };
    Ee(P, (L) => {
      C(u) === "human" ? L(H) : L(le, !1);
    });
  }
  var re = de(O, 2), Ce = W(re), Ie = W(Ce), be = de(Ce, 2);
  {
    var X = (L) => {
      var V = hp(), ne = W(V);
      {
        var ke = (fe) => {
          var ge = fp();
          ge.__click = [
            Jb,
            f,
            d,
            t,
            h,
            b
          ];
          var Pe = W(ge);
          Nf(Pe, { size: 14 }), pe(() => {
            at(ge, 1, `feedback-btn up ${C(f) === "up" ? "selected" : ""}`, "svelte-1mbk2rv"), Be(ge, "aria-pressed", C(f) === "up");
          }), q(fe, ge);
        };
        Ee(ne, (fe) => {
          C(f) !== "down" && fe(ke);
        });
      }
      var K = de(ne, 2);
      {
        var ie = (fe) => {
          var ge = dp();
          ge.__click = [
            Qb,
            f,
            h,
            b,
            d,
            t
          ];
          var Pe = W(ge);
          Rf(Pe, { size: 14 }), pe(() => {
            at(ge, 1, `feedback-btn down ${C(f) === "down" ? "selected" : ""}`, "svelte-1mbk2rv"), Be(ge, "aria-pressed", C(f) === "down");
          }), q(fe, ge);
        };
        Ee(K, (fe) => {
          C(f) !== "up" && fe(ie);
        });
      }
      q(L, V);
    };
    Ee(be, (L) => {
      C(u) === "ai" && t.message.id && L(X);
    });
  }
  var De = de(_, 2);
  {
    var Kt = (L) => {
      var V = bp(), ne = W(V), ke = de(W(ne), 2);
      Be(ke, "rows", 5);
      var K = de(ke, 2), ie = W(K);
      ie.__click = [
        tp,
        d,
        t,
        h,
        b
      ];
      var fe = de(ie, 2);
      fe.__click = [
        ep,
        d,
        t,
        b,
        h
      ], Sa(ke, () => C(b), (ge) => B(b, ge)), q(L, V);
    };
    Ee(De, (L) => {
      C(h) && L(Kt);
    });
  }
  pe(
    (L) => {
      at(_, 1, `message-container ${C(u) === "human" ? "human-message" : "ai-message"}`, "svelte-1mbk2rv"), at(w, 1, `message-content ${C(u) === "human" ? "human-content" : "ai-content"}`, "svelte-1mbk2rv"), at(y, 1, `message-body ${C(u) ?? ""}-body`, "svelte-1mbk2rv"), at(O, 1, `bubble ${C(u) ?? ""}-bubble ${C(r) ? "streaming" : ""}`, "svelte-1mbk2rv"), st(O, `--message-color: ${(C(u) === "human" ? t.secondaryColor : "white") ?? ""}; --text-color: ${(C(u) === "human" ? t.onSecondaryColor : "#1f2937") ?? ""}`), at(re, 1, `meta-row ${C(u) ?? ""}-meta`, "svelte-1mbk2rv"), nn(Ie, L);
    },
    [
      () => Xb(t.message.timestamp)
    ]
  ), q(e, A), Dn();
}
iu(["click"]);
var _p = /* @__PURE__ */ ce('<div class="loading-more svelte-559mhq"><div class="loading-spinner svelte-559mhq"></div> <span>Loading previous messages...</span></div>'), xp = (e, t, n) => t(C(n)), vp = /* @__PURE__ */ ce('<button type="button" class="quick-question svelte-559mhq"> </button>'), yp = /* @__PURE__ */ ce('<div class="quick-questions svelte-559mhq"><!> <div class="ai-disclaimer svelte-559mhq">Responses are generated using AI and may contain mistakes.</div></div>'), kp = (e, t, n, u) => {
  ((i) => i && (i.length === 1 || i === "Backspace" || i === "Delete"))(e.key) && (B(t, !0), n()), e.key === "Enter" && (e.shiftKey || (e.preventDefault(), u()));
}, wp = /* @__PURE__ */ ce('<div class="branding svelte-559mhq">Powered by <a target="_blank" rel="noopener noreferrer" class="branding-link svelte-559mhq"></a></div>'), Ep = /* @__PURE__ */ ce('<div class="chat-container svelte-559mhq"><div class="messages-container svelte-559mhq"><!> <!> <div class="bottom-anchor"></div></div> <!> <form class="input-container svelte-559mhq"><textarea class="message-input svelte-559mhq" rows="1"></textarea> <button type="submit" class="send-button svelte-559mhq" aria-label="Send message" title="Send"><!></button></form> <!></div>');
const Cp = {
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
function Ap(e, t) {
  An(t, !0), Gu(e, Cp);
  const [n, u] = Il(), r = () => Nl(We, "$chatStore", n), i = "fluentBot", o = "https://beta.fluentbot.ai";
  let a = /* @__PURE__ */ ve(""), s = /* @__PURE__ */ ve("What do you want to know?"), c = 0, l = !1, f = null, h = /* @__PURE__ */ ve(!1), b, d, g = /* @__PURE__ */ ve(!1), m = /* @__PURE__ */ ve(!0), A = /* @__PURE__ */ ve(!1), _, w = /* @__PURE__ */ Ge(() => r().messages), v = /* @__PURE__ */ Ge(() => r().isLoading), k = /* @__PURE__ */ Ge(() => r().hasMore), y = /* @__PURE__ */ Ge(() => r().conversation_id);
  const O = /* @__PURE__ */ Ge(() => C(w).some((F) => F.role === "human")), P = () => {
    if (!b) return !0;
    const F = 80, { scrollTop: Y, scrollHeight: te, clientHeight: ut } = b;
    return te - (Y + ut) <= F;
  }, H = (F = !1) => {
    if (!b) return;
    if (_) {
      _.scrollIntoView({
        behavior: F ? "smooth" : "auto",
        block: "end"
      });
      return;
    }
    const Y = b.scrollHeight;
    F ? b.scrollTo({ top: Y, behavior: "smooth" }) : b.scrollTop = Y;
  }, le = async () => {
    if (!b || (C(A) && B(m, P(), !0), C(g) || !C(k))) return;
    const { scrollTop: F } = b;
    if (F === 0 && C(y)) {
      B(g, !0);
      const Y = b.scrollHeight, te = b.scrollTop;
      await us(C(y), 20, r().nextCursor), await Hi();
      const Dt = b.scrollHeight - Y;
      Dt > 0 && (b.scrollTop = te + Dt), B(g, !1);
    }
  };
  ci(() => {
    requestAnimationFrame(() => H(!1));
    const F = new ResizeObserver(() => {
      C(m) && H(!1);
    });
    return b && F.observe(b), () => {
      F.disconnect();
    };
  });
  const re = () => {
    if (d) {
      d.style.height = "auto";
      const Y = Math.min(d.scrollHeight, 120);
      d.style.height = `${Y}px`;
    }
  }, Ce = () => {
    f && (clearTimeout(f), f = null);
  }, Ie = async (F) => {
    let Y = "";
    for (let te = 0; te < F.length; te++) {
      if (!l || C(h) || C(a).trim()) return;
      Y += F[te], B(s, Y + "|"), await new Promise((ut) => f = setTimeout(ut, 40));
    }
    B(s, Y, !0), await new Promise((te) => f = setTimeout(te, 1400));
    for (let te = Y.length; te >= 0; te--) {
      if (!l || C(h) || C(a).trim()) return;
      B(s, Y.slice(0, te) + (te ? "|" : "")), await new Promise((ut) => f = setTimeout(ut, 25));
    }
    B(s, "");
  }, be = async () => {
    const F = (t.settings?.quick_questions || []).slice(0, 10);
    if (!(!F || F.length === 0) && !l)
      for (l = !0; l; ) {
        if (C(h) || C(a).trim()) {
          await new Promise((te) => f = setTimeout(te, 500));
          continue;
        }
        const Y = F[c % F.length] || F[0];
        await Ie(Y), c = (c + 1) % F.length, await new Promise((te) => f = setTimeout(te, 300));
      }
  }, X = () => {
    l = !1, Ce();
  };
  Ot(() => {
    re();
  }), Ot(() => {
    t.settings && t.settings.quick_questions && t.settings.quick_questions.length && !C(a).trim() && !C(h) ? be() : (X(), C(a).trim() || B(s, "What do you want to know?"));
  }), jl(() => {
    X();
  }), Ot(() => {
    const F = C(w).length;
    if (!C(A) && F > 0) {
      Hi().then(() => {
        requestAnimationFrame(() => {
          H(!1), B(m, !0), B(A, !0);
        });
      });
      return;
    }
    C(m) && requestAnimationFrame(() => H(!1));
  });
  const De = async () => {
    if (!C(a).trim()) return;
    const F = C(a);
    B(a, ""), re(), B(m, !0), await wf(F, t.settings);
  }, Kt = (F) => {
    F && (B(a, F, !0), De());
  };
  var L = Ep(), V = W(L), ne = W(V);
  {
    var ke = (F) => {
      var Y = _p();
      q(F, Y);
    };
    Ee(ne, (F) => {
      C(g) && F(ke);
    });
  }
  var K = de(ne, 2);
  Ru(K, 19, () => C(w), (F, Y) => F.timestamp + "-" + Y, (F, Y) => {
    gp(F, {
      get message() {
        return C(Y);
      },
      get botIcon() {
        return t.settings.bot_icon;
      },
      get primaryColor() {
        return t.settings.primary_color;
      },
      get secondaryColor() {
        return t.settings.secondary_color;
      },
      get onPrimaryColor() {
        return t.settings.on_primary_color;
      },
      get onSecondaryColor() {
        return t.settings.on_secondary_color;
      },
      get showSources() {
        return t.settings.show_sources;
      }
    });
  });
  var ie = de(K, 2);
  ku(ie, (F) => _ = F, () => _), ku(V, (F) => b = F, () => b);
  var fe = de(V, 2);
  {
    var ge = (F) => {
      var Y = yp(), te = W(Y);
      Ru(te, 17, () => t.settings.quick_questions.slice(0, 3), si, (ut, Dt) => {
        var Je = vp();
        Je.__click = [xp, Kt, Dt];
        var mt = W(Je);
        pe(() => {
          st(Je, `--theme-color: ${t.settings.primary_color ?? ""}`), nn(mt, C(Dt));
        }), q(ut, Je);
      }), q(F, Y);
    };
    Ee(fe, (F) => {
      !C(O) && t.settings.quick_questions && t.settings.quick_questions.length && F(ge);
    });
  }
  var Pe = de(fe, 2), Xe = W(Pe);
  Xe.__input = re, Xe.__keydown = [
    kp,
    h,
    X,
    De
  ], ku(Xe, (F) => d = F, () => d);
  var pt = de(Xe, 2), Mn = W(pt);
  Mf(Mn, { size: 18, strokeWidth: 2 });
  var It = de(Pe, 2);
  {
    var Rn = (F) => {
      var Y = wp(), te = de(W(Y));
      Be(te, "href", o), te.textContent = i, pe(() => st(te, `color: ${t.settings.primary_color ?? ""}`)), q(F, Y);
    };
    Ee(It, (F) => {
      t.settings.show_branding && F(Rn);
    });
  }
  pe(
    (F) => {
      st(Pe, `--theme-color: ${t.settings.primary_color ?? ""}; --hover-color: ${t.settings.secondary_color ?? ""}`), Be(Xe, "placeholder", C(s)), Xe.disabled = C(v), pt.disabled = F;
    },
    [
      () => C(v) || !C(a).trim()
    ]
  ), gu("scroll", V, le), gu("submit", Pe, (F) => {
    F.preventDefault(), De();
  }), gu("focus", Xe, () => {
    B(h, !0), X();
  }), gu("blur", Xe, () => {
    B(h, !1);
  }), Sa(Xe, () => C(a), (F) => B(a, F)), q(e, L), Dn(), u();
}
iu(["click", "input", "keydown"]);
class Dp {
  settings;
  constructor(t) {
    this.settings = t;
  }
  async initialize() {
    const t = "currentChatId", n = "conversation_id";
    let u = localStorage.getItem(n);
    if (!u) {
      const r = localStorage.getItem(t);
      r && (u = r, localStorage.setItem(n, r), localStorage.removeItem(t));
    }
    u ? await us(u, 20, null) : this.settings.first_message && this.addInitialMessage();
  }
  addInitialMessage() {
    this.settings.first_message && We.update((t) => ({
      ...t,
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
    We.update((t) => ({
      ...t,
      messages: []
    })), localStorage.removeItem("conversation_id"), kf(), this.settings.first_message && this.addInitialMessage();
  }
}
const Sp = (e, t) => {
  t.resetChat();
}, Tp = (e, t) => {
  if (C(t)) {
    const n = new CustomEvent("minimize-widget");
    document.dispatchEvent(n), B(t, !1);
  } else {
    const n = new CustomEvent("maximize-widget");
    document.dispatchEvent(n), B(t, !0);
  }
};
var Op = /* @__PURE__ */ ce('<img class="logo svelte-nnvbbk" loading="lazy" decoding="async">'), Fp = () => document.dispatchEvent(new CustomEvent("close-widget")), Mp = /* @__PURE__ */ ce('<main class="svelte-nnvbbk"><header class="main-header svelte-nnvbbk"><div class="brand svelte-nnvbbk"><!> <div class="title svelte-nnvbbk"> </div></div> <div class="button-group svelte-nnvbbk"><button class="icon-button svelte-nnvbbk"><!></button> <button class="icon-button reset-mobile svelte-nnvbbk" aria-label="Reset chat"><!></button> <button class="icon-button close-mobile svelte-nnvbbk" aria-label="Close chat"><!></button></div></header> <div class="content svelte-nnvbbk"><!></div></main>');
const Rp = {
  hash: "svelte-nnvbbk",
  code: `main.svelte-nnvbbk {height:100vh;display:flex;flex-direction:column;background-color:#f7f7f7; /* gray-50 */overflow:hidden; /* preserve container rounded-corner clipping */}header.svelte-nnvbbk {color:inherit;padding:0.5rem;display:flex;align-items:center;gap:0.5rem;flex-shrink:0;}.main-header.svelte-nnvbbk {color:inherit;padding:0.5rem;display:flex;align-items:center;gap:0.5rem;flex-shrink:0;position:relative; /* ensure tooltips appear above content */z-index:2;}.brand.svelte-nnvbbk {display:flex;align-items:center;gap:0.5rem;min-width:0; /* allow children to truncate */}

  /* Constrain header logo so large images don't expand the header
     - Keep a sensible height, allow width to scale, and use object-fit
       so logos preserve aspect ratio without distortion. */.brand.svelte-nnvbbk .logo:where(.svelte-nnvbbk) {display:block;height:2rem; /* 32px - fits header comfortably */max-height:2.5rem; /* allow slightly taller logos on high-DPI */width:auto;max-width:12rem; /* avoid extremely wide logos pushing controls off-screen */object-fit:contain;}.title.svelte-nnvbbk {font-size:1.125rem;font-weight:600;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;}.button-group.svelte-nnvbbk {margin-left:auto;display:flex;gap:0.5rem;}

  /* Close button: always visible and placed to the right of Reset */.close-mobile.svelte-nnvbbk {display:inline-flex; /* show on all screen sizes */order:1; /* ensure it's placed after the reset button */}

  /* Ensure regular controls are visible on large screens */.button-group.svelte-nnvbbk .icon-button:where(.svelte-nnvbbk) {display:inline-flex;}

  @media screen and (max-width: 640px) {.close-mobile.svelte-nnvbbk {display:inline-flex !important;}

    /* hide regular maximize/minimize controls on mobile to reduce clutter (keep reset visible) */.button-group.svelte-nnvbbk .icon-button:where(.svelte-nnvbbk):not(.close-mobile):not(.reset-mobile) {display:none !important;}

    /* Show reset on mobile and keep it left of the close button */.reset-mobile.svelte-nnvbbk {display:inline-flex !important;order:0;margin-right:0; /* spacing handled on the close button */}.close-mobile.svelte-nnvbbk {order:1;}
  }.icon-button.svelte-nnvbbk {background:transparent;border:none;color:inherit; /* follow header on_primary_color */cursor:pointer;position:relative; /* enable tooltip positioning */display:inline-flex;align-items:center;justify-content:center;}

  /* Custom tooltip using aria-label as content */.icon-button.svelte-nnvbbk::after {content:attr(aria-label);position:absolute;top:calc(
      100% + 8px
    ); /* place tooltip below to avoid clipping by container */left:50%;transform:translateX(-50%);background-color:rgba(17, 24, 39, 0.95); /* near-black */color:#fff;padding:6px 8px; /* padding as requested */border-radius:6px; /* rounded corners as requested */font-size:12px;line-height:1;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity 150ms ease,
      transform 150ms ease;z-index:1000;}.icon-button.svelte-nnvbbk:hover::after,
  .icon-button.svelte-nnvbbk:focus-visible::after {opacity:1;transform:translateX(-50%) translateY(2px); /* slight downward nudge */}

  /* Keep the right-most tooltip inside the container by aligning it to the right edge of the button */.button-group.svelte-nnvbbk .icon-button:where(.svelte-nnvbbk):last-child::after {left:auto;right:0;transform:translateY(2px);}.content.svelte-nnvbbk {flex:1;overflow:hidden; /* keep scrolling content masked while tooltips can overflow from header */}`
};
function Np(e, t) {
  An(t, !0), Gu(e, Rp);
  const n = new Dp(t.settings);
  let u = /* @__PURE__ */ ve(!1);
  ci(async () => {
    await n.initialize();
  });
  var r = Mp(), i = W(r), o = W(i), a = W(o);
  {
    var s = (y) => {
      var O = Op();
      pe(() => {
        Be(O, "src", t.settings.header_logo), Be(O, "alt", t.settings.title_text ? t.settings.title_text + " logo" : "Logo");
      }), q(y, O);
    };
    Ee(a, (y) => {
      t.settings.header_logo && y(s);
    });
  }
  var c = de(a, 2), l = W(c), f = de(o, 2), h = W(f);
  h.__click = [Tp, u];
  var b = W(h);
  {
    var d = (y) => {
      Ff(y, { size: 16 });
    }, g = (y) => {
      Af(y, { size: 16 });
    };
    Ee(b, (y) => {
      C(u) ? y(d) : y(g, !1);
    });
  }
  var m = de(h, 2);
  m.__click = [Sp, n];
  var A = W(m);
  If(A, { size: 16 });
  var _ = de(m, 2);
  _.__click = [Fp];
  var w = W(_);
  as(w, { size: 16 });
  var v = de(i, 2), k = W(v);
  Ap(k, {
    get settings() {
      return t.settings;
    }
  }), pe(() => {
    st(i, `background-color: ${t.settings.primary_color ?? ""}; color: ${t.settings.on_primary_color ?? ""};`), Be(c, "title", t.settings.title_text), nn(l, t.settings.title_text), Be(h, "aria-label", C(u) ? "Collapse chat" : "Expand chat");
  }), q(e, r), Dn();
}
iu(["click"]);
const Ip = "html,body{height:100%;margin:0;overflow:hidden}", Pp = `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: a11y-light
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/.hljs{background:#fefefe;color:#545454}.hljs-comment,.hljs-quote{color:#696969}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#d91e18}.hljs-number,.hljs-built_in,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link,.hljs-attribute{color:#aa5d00}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:green}.hljs-title,.hljs-section{color:#007faa}.hljs-keyword,.hljs-selector-tag{color:#7928a1}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast: active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}`;
var Lp = (e, t, n) => {
  n.onToggle?.();
}, Bp = /* @__PURE__ */ ce('<div class="close-icon svelte-1ofuhp"><!></div>'), zp = /* @__PURE__ */ ce('<img alt="Chat Icon" class="icon-image svelte-1ofuhp">'), qp = /* @__PURE__ */ ce('<span class="button-text svelte-1ofuhp"> </span>'), jp = /* @__PURE__ */ ce('<div class="chat-icon svelte-1ofuhp"><!></div> <!>', 1), Up = /* @__PURE__ */ ce('<button id="chat-button"><!></button>');
const $p = {
  hash: "svelte-1ofuhp",
  code: `#chat-button.svelte-1ofuhp {display:flex;align-items:center;justify-content:center;gap:8px;min-width:3.5rem;height:3.5rem;padding:0;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    /* Animate size/padding/gap changes when breakpoints change */transition:min-width 180ms ease,
      height 180ms ease,
      padding 180ms ease,
      gap 180ms ease,
      border-radius 180ms ease;z-index:10000;}#chat-button.with-text.svelte-1ofuhp {padding:0 1.25rem;border-radius:100px;}.button-text.svelte-1ofuhp {
    /* Responsive text: clamp(min, fluid, max) so it scales smoothly between viewports */
    /* min 14px, fluid around viewport width, max 18px for large screens */font-size:18px;white-space:nowrap;transition:font-size 180ms ease;}

  /* icon wrappers get a scale variable so we can animate size changes smoothly */.chat-icon.svelte-1ofuhp,
  .close-icon.svelte-1ofuhp {display:flex;align-items:center;justify-content:center;transition:transform 180ms ease;transform-origin:center;
    /* default scale is 1; set inline via style attribute when needed */}

  /* image transition for smooth width/height change */.icon-image.svelte-1ofuhp {transition:width 180ms ease,
      height 180ms ease;display:block;}#chat-button.svelte-1ofuhp:hover {transform:translateY(-1px);}

  /* Tablet and below: ensure text is reduced for mid-size screens and reduce button size */
  @media (max-width: 1024px) {.button-text.svelte-1ofuhp {font-size:16px;}

    /* make the button slightly smaller on tablet and laptop widths */#chat-button.svelte-1ofuhp {min-width:3rem;height:3rem;padding:0 0.6rem;border-radius:50%;}#chat-button.with-text.svelte-1ofuhp {padding:0 0.6rem;}
  }

  /* Mobile: reduce button size and typography to fit smaller screens */
  @media (max-width: 480px) {#chat-button.svelte-1ofuhp {min-width:2.6rem;height:2.6rem;padding:0 0.5rem;gap:6px;border-radius:9px;}#chat-button.with-text.svelte-1ofuhp {padding:0 0.5rem;}.button-text.svelte-1ofuhp {font-size:13px;}
  }

  /* Very small screens: make the button even more compact */
  @media (max-width: 360px) {#chat-button.svelte-1ofuhp {min-width:2.4rem;height:2.4rem;padding:0 0.5rem;border-radius:8px;}

    /* hide text to preserve space */#chat-button.with-text.svelte-1ofuhp .button-text:where(.svelte-1ofuhp) {display:none;}
  }`
};
function Uo(e, t) {
  An(t, !0), Gu(e, $p);
  const n = /* @__PURE__ */ Bl(t, ["$$slots", "$$events", "$$legacy"]), u = {
    MessageSquare: bo,
    MessageSquareMore: Tf,
    MessageCircle: Sf,
    MessageCircleMore: Df,
    MessagesSquare: Of,
    Bot: $r,
    BotMessageSquare: rs,
    Sparkle: is,
    Sparkles: os
  }, r = /* @__PURE__ */ Ge(() => !!t.buttonIcon && t.buttonIcon.startsWith("https://")), i = /* @__PURE__ */ Ge(() => C(r) ? null : u[t.buttonIcon || "MessageSquare"] || bo);
  let o = /* @__PURE__ */ ve(24), a = /* @__PURE__ */ ve(1);
  function s() {
    try {
      const d = typeof window < "u" ? window.innerWidth : 9999;
      d <= 480 ? B(o, 18) : d <= 1024 ? B(o, 20) : B(o, 24), B(a, C(o) / 24);
    } catch {
      B(o, 24);
    }
  }
  s(), typeof window < "u" && (window.addEventListener("resize", s), Ot(() => () => window.removeEventListener("resize", s)));
  var c = Up();
  c.__click = [Lp, n, t];
  let l;
  var f = W(c);
  {
    var h = (d) => {
      var g = Bp(), m = W(g);
      const A = /* @__PURE__ */ Ge(() => C(o) + 4);
      as(m, {
        get size() {
          return C(A);
        },
        strokeWidth: 2
      }), pe(() => st(g, `--icon-scale: ${C(a) ?? ""}; transform: scale(var(--icon-scale));`)), q(d, g);
    }, b = (d) => {
      var g = jp(), m = ye(g), A = W(m);
      {
        var _ = (y) => {
          var O = zp();
          pe(() => {
            Be(O, "src", t.buttonIcon), st(O, `width: ${C(o) ?? ""}px; height: ${C(o) ?? ""}px;`);
          }), q(y, O);
        }, w = (y, O) => {
          {
            var P = (H) => {
              var le = Me(), re = ye(le);
              Cl(re, () => C(i), (Ce, Ie) => {
                Ie(Ce, {
                  get size() {
                    return C(o);
                  },
                  strokeWidth: 2
                });
              }), q(H, le);
            };
            Ee(
              y,
              (H) => {
                C(i) && H(P);
              },
              O
            );
          }
        };
        Ee(A, (y) => {
          C(r) ? y(_) : y(w, !1);
        });
      }
      var v = de(m, 2);
      {
        var k = (y) => {
          var O = qp(), P = W(O);
          pe(() => nn(P, t.buttonText)), q(y, O);
        };
        Ee(v, (y) => {
          t.showButtonText && !t.isOpen && y(k);
        });
      }
      pe(() => st(m, `--icon-scale: ${C(a) ?? ""}; transform: scale(var(--icon-scale));`)), q(d, g);
    };
    Ee(f, (d) => {
      t.isOpen ? d(h) : d(b, !1);
    });
  }
  pe(
    (d) => {
      Be(c, "aria-label", t.isOpen ? "Close chat" : "Open chat"), st(c, `background-color: ${t.primaryColor ?? ""}; color: ${t.onPrimaryColor ?? ""};`), l = at(c, 1, "svelte-1ofuhp", null, l, d);
    },
    [
      () => ({
        active: t.isOpen,
        "with-text": t.showButtonText && !t.isOpen,
        "with-icon-url": C(r)
      })
    ]
  ), q(e, c), Dn();
}
iu(["click"]);
class Hp {
  container = null;
  buttonContainer = null;
  isOpen = !1;
  isMaximized = !1;
  clickHandler;
  maximizeHandler;
  minimizeHandler;
  closeHandler;
  feedbackHandler;
  settings = null;
  chatButtonInstance = null;
  constructor(t) {
    this.clickHandler = this.handleClickOutside.bind(this), this.maximizeHandler = this.maximizeWidget.bind(this), this.minimizeHandler = this.minimizeWidget.bind(this), this.closeHandler = () => {
      this.isOpen && this.toggleWidget();
    }, this.feedbackHandler = this.handleMessageFeedback.bind(this), this.initialize(t);
  }
  async fetchSettings(t) {
    try {
      return (await yf.get(`/api/bots/${t}/widget-settings`)).data.data;
    } catch (n) {
      return console.error("Error fetching widget settings:", n), null;
    }
  }
  handleClickOutside(t) {
    !t.composedPath().some(
      (r) => r === this.container || r === this.buttonContainer || r instanceof HTMLElement && (r.closest("#fluent-bot-chat-widget") === this.container || // Treat clicks on the chat button as inside
      r.closest("#chat-button") !== null)
    ) && this.isOpen && this.toggleWidget();
  }
  toggleWidget() {
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
        } catch {
        }
        if (this.chatButtonInstance = null, this.buttonContainer) {
          try {
            this.buttonContainer.innerHTML = "";
          } catch {
          }
          const t = {
            target: this.buttonContainer,
            props: {
              isOpen: this.isOpen,
              onToggle: () => this.toggleWidget(),
              buttonIcon: this.settings?.button_icon,
              showButtonText: this.settings?.show_button_text,
              buttonText: this.settings?.button_text,
              primaryColor: this.settings?.primary_color,
              onPrimaryColor: this.settings?.on_primary_color
            }
          };
          this.chatButtonInstance = hr(Uo, t);
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

            ${Pp}
            ${Ip}
        `, t;
  }
  async initialize(t) {
    if (this.settings = await this.fetchSettings(t), !this.settings) {
      console.warn("No widget settings found, widget will not be initialized");
      return;
    }
    const n = document.createElement("div");
    n.id = "fluent-bot-chat-widget-container", n.classList.add(`align-${this.settings.button_alignment}`);
    const u = n.attachShadow({ mode: "open" }), r = document.createElement("div");
    r.id = "fluent-bot-chat-widget";
    const i = document.createElement("div");
    i.id = "chat-button-container", u.appendChild(this.createStyles()), u.appendChild(r), u.appendChild(i), document.body.appendChild(n), this.container = r, this.buttonContainer = i, document.addEventListener("click", this.clickHandler, !0), document.addEventListener("close-widget", this.closeHandler), document.addEventListener("maximize-widget", this.maximizeHandler), document.addEventListener("minimize-widget", this.minimizeHandler), document.addEventListener("message-feedback", this.feedbackHandler), hr(Np, {
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
        primaryColor: this.settings.primary_color,
        onPrimaryColor: this.settings.on_primary_color
      }
    };
    this.chatButtonInstance = hr(Uo, o);
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
    this.chatButtonInstance && typeof this.chatButtonInstance.destroy == "function" && (this.chatButtonInstance.destroy(), this.chatButtonInstance = null), document.removeEventListener("click", this.clickHandler, !0), document.removeEventListener("close-widget", this.closeHandler), document.removeEventListener("maximize-widget", this.maximizeHandler), document.removeEventListener("minimize-widget", this.minimizeHandler), document.removeEventListener("message-feedback", this.feedbackHandler);
  }
  async handleMessageFeedback(t) {
    try {
      const u = t.detail || {}, r = u.message || null, i = u.feedback || null, o = u.comment || u.comments || null, a = u.action || null, s = u.feedback_id || u.feedbackId || null;
      if (a === "delete") {
        if (!s) {
          console.warn("Delete feedback action received but no feedback id present", r);
          return;
        }
        try {
          await Ur.delete(`/feedbacks/${s}`);
        } catch (h) {
          console.error("Failed to delete feedback", h);
        }
        return;
      }
      if (!r || !i)
        return;
      const c = i === "up" ? "positive" : i === "down" ? "negative" : null;
      if (!c) return;
      const l = r.id ?? r.message_id ?? null;
      if (!l) {
        console.warn("Feedback event missing message id, skipping send", r);
        return;
      }
      const f = {
        message_id: l,
        reaction: c,
        comments: o
      };
      await Ur.post("/feedbacks", f);
    } catch (n) {
      console.error("Failed to send feedback", n);
    }
  }
}
const Wp = () => document.querySelector(
  "#fluent-bot-chat-widget-container"
), l2 = (e) => {
  Wp() || new Hp(e);
};
export {
  Hp as FluentBotChatWidget,
  l2 as injectWidget
};
//# sourceMappingURL=fluent-bot-chat-widget.es.js.map
