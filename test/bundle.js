(() => {
	"use strict";
	let e = !1;
	const t = {},
		n = (e) => "object" == (e = typeof e) || "function" === e,
		s = (e, t, ...s) => {
			let a = null,
				l = !1,
				i = !1;
			const o = [],
				$ = (t) => {
					for (let s = 0; s < t.length; s++)
						(a = t[s]),
							Array.isArray(a)
								? $(a)
								: null != a &&
								  "boolean" != typeof a &&
								  ((l = "function" != typeof e && !n(a)) &&
										(a = String(a)),
								  l && i
										? (o[o.length - 1].$text$ += a)
										: o.push(l ? r(null, a) : a),
								  (i = l));
				};
			$(s);
			const c = r(e, null);
			return (c.$attrs$ = t), o.length > 0 && (c.$children$ = o), c;
		},
		r = (e, t) => ({
			$flags$: 0,
			$tag$: e,
			$text$: t,
			$elm$: null,
			$children$: null,
			$attrs$: null,
		}),
		a = {},
		l = (e, t, s, r, a, l) => {
			if (s !== r) {
				let i = P(e, t);
				if ((t.toLowerCase(), "style" === t)) {
					for (const t in s)
						(r && null != r[t]) ||
							(t.includes("-")
								? e.style.removeProperty(t)
								: (e.style[t] = ""));
					for (const t in r)
						(s && r[t] === s[t]) ||
							(t.includes("-")
								? e.style.setProperty(t, r[t])
								: (e.style[t] = r[t]));
				} else {
					const o = n(r);
					if ((i || (o && null !== r)) && !a)
						try {
							if (e.tagName.includes("-")) e[t] = r;
							else {
								const n = null == r ? "" : r;
								"list" === t
									? (i = !1)
									: (null != s && e[t] == n) || (e[t] = n);
							}
						} catch (e) {}
					null == r || !1 === r
						? (!1 === r && "" !== e.getAttribute(t)) ||
						  e.removeAttribute(t)
						: (!i || 4 & l || a) &&
						  !o &&
						  ((r = !0 === r ? "" : r), e.setAttribute(t, r));
				}
			}
		},
		i = (e, n, s, r) => {
			const a =
					11 === n.$elm$.nodeType && n.$elm$.host
						? n.$elm$.host
						: n.$elm$,
				i = (e && e.$attrs$) || t,
				o = n.$attrs$ || t;
			for (r in i) r in o || l(a, r, i[r], void 0, s, n.$flags$);
			for (r in o) l(a, r, i[r], o[r], s, n.$flags$);
		},
		o = (e, t, n, s) => {
			const r = t.$children$[n];
			let a,
				l,
				$ = 0;
			if (
				((a = r.$elm$ = _.createElement(r.$tag$)),
				i(null, r, !1),
				r.$children$)
			)
				for ($ = 0; $ < r.$children$.length; ++$)
					(l = o(e, r, $)), l && a.appendChild(l);
			return a;
		},
		$ = (e, t, n, s, r, a) => {
			let l,
				i = e;
			for (; r <= a; ++r)
				s[r] &&
					((l = o(null, n, r)),
					l && ((s[r].$elm$ = l), i.insertBefore(l, t)));
		},
		c = (e, t, n, s, r) => {
			for (; t <= n; ++t) (s = e[t]) && s.$elm$.remove();
		},
		d = (e, t) => e.$tag$ === t.$tag$,
		u = (e, t) => {
			const n = (t.$elm$ = e.$elm$),
				s = e.$children$,
				r = t.$children$;
			i(e, t, !1),
				null !== s && null !== r
					? ((e, t, n, s) => {
							let r,
								a = 0,
								l = 0,
								i = t.length - 1,
								h = t[0],
								g = t[i],
								m = s.length - 1,
								p = s[0],
								f = s[m];
							for (; a <= i && l <= m; )
								null == h
									? (h = t[++a])
									: null == g
									? (g = t[--i])
									: null == p
									? (p = s[++l])
									: null == f
									? (f = s[--m])
									: d(h, p)
									? (u(h, p), (h = t[++a]), (p = s[++l]))
									: d(g, f)
									? (u(g, f), (g = t[--i]), (f = s[--m]))
									: d(h, f)
									? (u(h, f),
									  e.insertBefore(
											h.$elm$,
											g.$elm$.nextSibling
									  ),
									  (h = t[++a]),
									  (f = s[--m]))
									: d(g, p)
									? (u(g, p),
									  e.insertBefore(g.$elm$, h.$elm$),
									  (g = t[--i]),
									  (p = s[++l]))
									: ((r = o(t && t[l], n, l)),
									  (p = s[++l]),
									  r &&
											h.$elm$.parentNode.insertBefore(
												r,
												h.$elm$
											));
							a > i
								? $(
										e,
										null == s[m + 1]
											? null
											: s[m + 1].$elm$,
										n,
										s,
										l,
										m
								  )
								: l > m && c(t, a, i);
					  })(n, s, t, r)
					: null !== r
					? $(n, null, t, r, 0, r.length - 1)
					: null !== s && c(s, 0, s.length - 1);
		},
		h = (e, t) => {
			t &&
				!e.$onRenderResolve$ &&
				t["s-p"] &&
				t["s-p"].push(new Promise((t) => (e.$onRenderResolve$ = t)));
		},
		g = (e, t) => {
			if (((e.$flags$ |= 16), !(4 & e.$flags$)))
				return h(e, e.$ancestorComponent$), A(() => m(e));
			e.$flags$ |= 512;
		},
		m = (e, t) => {
			const n = e.$hostElement$,
				s = (e.$cmpMeta$.$tagName$, () => {}),
				r = n;
			return s(), y(void 0, () => p(e, r));
		},
		p = async (e, t, n) => {
			const s = e.$hostElement$,
				r = (e.$cmpMeta$.$tagName$, () => {}),
				a = s["s-rc"],
				l = (e.$cmpMeta$.$tagName$, () => {});
			f(e, t), a && (a.map((e) => e()), (s["s-rc"] = void 0)), l(), r();
			{
				const t = s["s-p"],
					n = () => v(e);
				0 === t.length
					? n()
					: (Promise.all(t).then(n),
					  (e.$flags$ |= 4),
					  (t.length = 0));
			}
		},
		f = (e, t, n) => {
			try {
				(t = t.render()),
					(e.$flags$ &= -17),
					(e.$flags$ |= 2),
					((e, t) => {
						const n = e.$hostElement$,
							l = e.$vnode$ || r(null, null),
							i = (o = t) && o.$tag$ === a ? t : s(null, null, t);
						var o;
						(i.$tag$ = null),
							(i.$flags$ |= 4),
							(e.$vnode$ = i),
							(i.$elm$ = l.$elm$ = n),
							u(l, i);
					})(e, t);
			} catch (t) {
				T(t, e.$hostElement$);
			}
			return null;
		},
		v = (e) => {
			e.$cmpMeta$.$tagName$;
			const t = e.$hostElement$,
				n = e.$ancestorComponent$;
			64 & e.$flags$ ||
				((e.$flags$ |= 64), w(t), e.$onReadyResolve$(t), n || b()),
				e.$onRenderResolve$ &&
					(e.$onRenderResolve$(), (e.$onRenderResolve$ = void 0)),
				512 & e.$flags$ && B(() => g(e)),
				(e.$flags$ &= -517);
		},
		b = (e) => {
			w(_.documentElement),
				B(() =>
					((e, t, n) => {
						const s = L.ce("appload", {
							detail: { namespace: "cm-utils" },
						});
						return e.dispatchEvent(s), s;
					})(U)
				);
		},
		y = (e, t) => (e && e.then ? e.then(t) : t()),
		w = (e) => e.classList.add("hydrated"),
		k = (e, t, s) => {
			if (t.$members$) {
				const s = Object.entries(t.$members$),
					r = e.prototype;
				s.map(([e, [s]]) => {
					(31 & s || 32 & s) &&
						Object.defineProperty(r, e, {
							get() {
								return (t = e), S(this).$instanceValues$.get(t);
								var t;
							},
							set(s) {
								((e, t, s, r) => {
									const a = S(e),
										l = a.$instanceValues$.get(t),
										i = a.$flags$;
									var o, $;
									(o = s),
										($ = r.$members$[t][0]),
										(s =
											null == o || n(o)
												? o
												: 1 & $
												? String(o)
												: o);
									const c =
										Number.isNaN(l) && Number.isNaN(s);
									s !== l &&
										!c &&
										(a.$instanceValues$.set(t, s),
										2 == (18 & i) && g(a));
								})(this, e, s, t);
							},
							configurable: !0,
							enumerable: !0,
						});
				});
				{
					const t = new Map();
					(r.attributeChangedCallback = function (e, n, s) {
						L.jmp(() => {
							const n = t.get(e);
							if (this.hasOwnProperty(n))
								(s = this[n]), delete this[n];
							else if (
								r.hasOwnProperty(n) &&
								"number" == typeof this[n] &&
								this[n] == s
							)
								return;
							this[n] =
								(null !== s || "boolean" != typeof this[n]) &&
								s;
						});
					}),
						(e.observedAttributes = s
							.filter(([e, t]) => 15 & t[0])
							.map(([e, n]) => {
								const s = n[1] || e;
								return t.set(s, e), s;
							}));
				}
			}
			return e;
		},
		R = (e, t) => {
			const n = { $flags$: t[0], $tagName$: t[1] };
			return (
				(n.$members$ = t[2]),
				Object.assign(e.prototype, {
					__registerHost() {
						E(this, n);
					},
					connectedCallback() {
						((e) => {
							if (0 == (1 & L.$flags$)) {
								const t = S(e),
									n = t.$cmpMeta$,
									s = (n.$tagName$, () => {});
								if (!(1 & t.$flags$)) {
									t.$flags$ |= 1;
									{
										let n = e;
										for (; (n = n.parentNode || n.host); )
											if (n["s-p"]) {
												h(
													t,
													(t.$ancestorComponent$ = n)
												);
												break;
											}
									}
									n.$members$ &&
										Object.entries(n.$members$).map(
											([t, [n]]) => {
												if (
													31 & n &&
													e.hasOwnProperty(t)
												) {
													const n = e[t];
													delete e[t], (e[t] = n);
												}
											}
										),
										(async (e, t, n, s, r) => {
											const a = t.$ancestorComponent$,
												l = () => g(t);
											a && a["s-rc"]
												? a["s-rc"].push(l)
												: l();
										})(0, t);
								}
								s();
							}
						})(this);
					},
					disconnectedCallback() {
						0 == (1 & L.$flags$) && S(this);
					},
					__attachShadow() {
						this.attachShadow({ mode: "open" });
					},
				}),
				(e.is = n.$tagName$),
				k(e, n)
			);
		},
		N = new WeakMap(),
		S = (e) => N.get(e),
		E = (e, t) => {
			const n = {
				$flags$: 0,
				$hostElement$: e,
				$cmpMeta$: t,
				$instanceValues$: new Map(),
			};
			return (
				(n.$onReadyPromise$ = new Promise(
					(e) => (n.$onReadyResolve$ = e)
				)),
				(e["s-p"] = []),
				(e["s-rc"] = []),
				N.set(e, n)
			);
		},
		P = (e, t) => t in e,
		T = (e, t) => (0, console.error)(e, t),
		U = "undefined" != typeof window ? window : {},
		_ = U.document || { head: {} },
		I = U.HTMLElement || class {},
		L = {
			$flags$: 0,
			$resourcesUrl$: "",
			jmp: (e) => e(),
			raf: (e) => requestAnimationFrame(e),
			ael: (e, t, n, s) => e.addEventListener(t, n, s),
			rel: (e, t, n, s) => e.removeEventListener(t, n, s),
			ce: (e, t) => new CustomEvent(e, t),
		},
		O = [],
		j = [],
		C = (t, n) => (s) => {
			t.push(s), e || ((e = !0), n && 4 & L.$flags$ ? B(x) : L.raf(x));
		},
		M = (e) => {
			for (let t = 0; t < e.length; t++)
				try {
					e[t](performance.now());
				} catch (e) {
					T(e);
				}
			e.length = 0;
		},
		x = () => {
			M(O), M(j), (e = O.length > 0) && L.raf(x);
		},
		B = (e) => Promise.resolve(undefined).then(e),
		A = C(j, !0);
	class V extends Error {}
	const F = R(
		class extends I {
			constructor() {
				super(),
					this.__registerHost(),
					(this.apiURL =
						"https://business-api.parcellab.com/v3/public/campaign/contentBlocks"),
					(this.medium = "web"),
					(this.contentType = "banner_order_status_page"),
					(this.bannerType = "mainBannerVertical"),
					(this.language = void 0),
					(this.trackingId = void 0),
					(this._campaign = void 0),
					(this.bannerSrc = void 0),
					(this.targetUrl = void 0),
					this.fetchBanner().catch(console.warn);
			}
			getTrackingPropsFromURL() {
				const e = new URLSearchParams(window.location.search),
					t = e.get("xid"),
					n = e.get("tid"),
					s = e.get("trackingNo") || e.get("tno"),
					r = e.get("courier") || e.get("c"),
					a = e.get("orderNo"),
					l = e.get("plUserId") || e.get("u") || e.get("userId");
				return t && l
					? { xid: t, u: l }
					: n
					? { tid: n }
					: s && r
					? { tno: s, courier: r }
					: a && l
					? { orderNo: a, u: l }
					: null;
			}
			async fetchTrackingInfos(e) {
				return this.fetchJSON(
					`https://api.parcellab.com/v2/checkpoints?${new URLSearchParams(
						e
					).toString()}`
				);
			}
			async discoverTrackingId() {
				var e, t, n, s;
				if (!this.trackingId) {
					const r = this.getTrackingPropsFromURL();
					if (null == r ? void 0 : r.tid) return r.tid;
					if (r) {
						const a = await this.fetchTrackingInfos(
							new URLSearchParams(r)
						);
						(null ===
							(t =
								null === (e = null == a ? void 0 : a.header) ||
								void 0 === e
									? void 0
									: e[0]) || void 0 === t
							? void 0
							: t.id) &&
							(this.trackingId =
								null ===
									(s =
										null ===
											(n =
												null == a
													? void 0
													: a.header) || void 0 === n
											? void 0
											: n[0]) || void 0 === s
									? void 0
									: s.id);
					}
				}
			}
			async fetchJSON(e, t) {
				const n = await fetch(e, t);
				if (!n.ok) throw new V(`Fetch error: ${n.statusText}`);
				return await n.json();
			}
			async fetchBanner() {
				var e, t, n, s, r, a, l;
				if ((await this.discoverTrackingId(), this.trackingId)) {
					const i = Object.assign(
							Object.assign(
								Object.assign(
									{},
									this.language && { language: this.language }
								),
								this.medium && { medium: this.medium }
							),
							{ trackingId: this.trackingId }
						),
						o = new URLSearchParams(Object.assign({}, i)),
						$ = await this.fetchJSON(
							`${this.apiURL}?${o.toString()}`
						);
					if (
						((this._campaign = $),
						null ===
							(n =
								null ===
									(t =
										null === (e = this._campaign) ||
										void 0 === e
											? void 0
											: e.values) || void 0 === t
									? void 0
									: t[this.contentType]) || void 0 === n
							? void 0
							: n[this.bannerType])
					) {
						const e =
							null ===
								(a =
									null ===
										(r =
											null === (s = this._campaign) ||
											void 0 === s
												? void 0
												: s.values) || void 0 === r
										? void 0
										: r[this.contentType]) || void 0 === a
								? void 0
								: a[this.bannerType];
						(this.targetUrl = e.targetUrl || ""),
							(this.bannerSrc =
								(null === (l = e.bannerImage) || void 0 === l
									? void 0
									: l.url) || "");
					}
				}
			}
			render() {
				return this.bannerSrc && this.targetUrl
					? s(
							"a",
							{ href: this.targetUrl, target: "_blank" },
							s("img", {
								src: this.bannerSrc,
								style: { maxWidth: "100%" },
							})
					  )
					: void 0;
			}
		},
		[
			0,
			"pl-cm-banner",
			{
				apiURL: [1, "api-u-r-l"],
				medium: [1],
				contentType: [1, "content-type"],
				bannerType: [1, "banner-type"],
				language: [1],
				trackingId: [1025, "tracking-id"],
				_campaign: [32],
				bannerSrc: [32],
				targetUrl: [32],
			},
		]
	);
	"undefined" != typeof customElements &&
		["pl-cm-banner"].forEach((e) => {
			"pl-cm-banner" === e &&
				(customElements.get(e) || customElements.define(e, F));
		});
})();
