(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    100: function(e, t, n) {
        "use strict";
        var o = n(75)
          , l = n.n(o);
        n.d(t, "default", (function() {
            return l.a
        }
        ))
    },
    101: function(e, t, n) {
        "use strict";
        var o = n(76)
          , l = n.n(o);
        n.d(t, "default", (function() {
            return l.a
        }
        ))
    },
    104: function(e, t, n) {
        "use strict";
        var o = n(2);
        t.a = Object(o.c)(( (e, t) => {
            let {app: n} = e;
            var o;
            const l = {
                pageview() {
                    this.event("page_view", {
                        page_title: document.title,
                        page_location: location.href,
                        page_path: location.pathname
                    })
                },
                event(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    window.gtag && window.gtag("event", e, {
                        ...t
                    })
                }
            };
            null === (o = null == n ? void 0 : n.router) || void 0 === o || o.afterEach(( () => {
                setTimeout(( () => l.pageview()), 1e3)
            }
            )),
            t("gtag", l)
        }
        ))
    },
    105: function(e, t, n) {
        "use strict";
        n(27);
        const o = {
            install(e) {
                e.directive("letterfade", {
                    inserted(e, t) {
                        const n = t.value || {}
                          , o = t.modifiers || {};
                        if (!1 === n.enabled)
                            return;
                        if (e.classList.add("letterfade"),
                        "slideup" === n.name)
                            e.classList.add("letterfade--slide-y");
                        else
                            e.classList.add("letterfade--slide-x");
                        const l = (e.textContent || "").trim().split("\n").map((e => e.trim().replace(/\s+/g, " ").split("").map(( (e, i) => '<i class="letterfade-item" style="transition-delay:'.concat(.1 * i, 's;">').concat(e, "</i>"))).join(""))).join("<br>");
                        e.innerHTML = l;
                        const r = new window.IntersectionObserver((t => {
                            t.forEach((t => {
                                let {target: l, isIntersecting: c} = t;
                                var d;
                                c ? (setTimeout(( () => {
                                    e.classList.add("letterfade--visible")
                                }
                                ), Math.max(0, null !== (d = n.delay) && void 0 !== d ? d : 100)),
                                !o.once && o.iobs || (r.unobserve(l),
                                r.disconnect())) : l.classList.remove("letterfade--visible")
                            }
                            ))
                        }
                        ));
                        r.observe(e)
                    }
                })
            }
        };
        n(1).default.use(o)
    },
    106: function(e, t, n) {
        "use strict";
        var o = n(142)
          , l = n.n(o)
          , r = n(2);
        t.a = Object(r.c)(( (e, t) => {
            t("virtualScroll", l.a)
        }
        ))
    },
    108: function(e, t, n) {
        "use strict";
        var o = n(1);
        n(60),
        n(61),
        n(62),
        n(63),
        n(64),
        n(65),
        n(66),
        n(67),
        n(68),
        n(69),
        n(70),
        n(71),
        n(72),
        n(11);
        var l = {
            install(e, t) {
                var n, o;
                const l = null !== (n = null == t ? void 0 : t.easing) && void 0 !== n ? n : "cubic-bezier(0, 0, 0, 1)"
                  , r = null !== (o = null == t ? void 0 : t.duration) && void 0 !== o ? o : 400
                  , map = new Map;
                function c(e, t) {
                    return t.reduce(( (t, n) => (t[n] = e.style[n],
                    t)), {})
                }
                function d(e, t, n) {
                    return n || (n = getComputedStyle(e)),
                    null == t ? void 0 : t.reduce(( (e, t) => (n[t] && (e[t] = n[t]),
                    e)), {})
                }
                function h(e, t, n, o) {
                    const l = t.cloneNode(!0)
                      , r = d(t, n)
                      , {top: c, left: h, width: C, height: v} = t.getBoundingClientRect();
                    l.className = "",
                    Object.assign(l.style, {
                        ...r,
                        position: "fixed",
                        zIndex: "9999",
                        width: "".concat(C, "px"),
                        height: "".concat(v, "px"),
                        top: "".concat(c - (o ? 0 : document.body.scrollTop), "px"),
                        left: "".concat(h - (o ? 0 : document.body.scrollLeft), "px"),
                        pointerEvents: "none"
                    }),
                    map.set(e, l)
                }
                e.directive("hero", {
                    bind(e, t) {
                        var n;
                        const o = t.value
                          , l = "string" == typeof o ? o : null == o ? void 0 : o.tag
                          , r = l ? map.get(l) : void 0
                          , c = "string" != typeof o && (null !== (n = null == o ? void 0 : o.disabled) && void 0 !== n && n);
                        r && !c && (e.style.visibility = "hidden",
                        document.body.appendChild(r))
                    },
                    inserted(e, t) {
                        var n, o;
                        const C = t.value
                          , v = t.modifiers
                          , m = null !== (n = null == v ? void 0 : v.fixed) && void 0 !== n && n
                          , y = "string" == typeof C ? C : null == C ? void 0 : C.tag
                          , f = "string" == typeof C || null == C ? void 0 : C.style
                          , L = "string" != typeof C && (null !== (o = null == C ? void 0 : C.disabled) && void 0 !== o && o);
                        y ? L ? map.delete(y) : requestAnimationFrame(( () => function(e, t, n, o) {
                            const C = map.get(e);
                            if (!C || !C.parentElement)
                                return void h(e, t, n, o);
                            const v = d(t, n)
                              , {top: m, left: y, width: f, height: L} = t.getBoundingClientRect()
                              , w = ["width", "height", "top", "left", ...Object.keys(v || {})]
                              , M = c(C, w);
                            function _() {
                                null == C || C.remove(),
                                t.style.visibility = "",
                                h(e, t, n, o)
                            }
                            C.addEventListener("transitionend", _, {
                                once: !0
                            }),
                            Object.assign(C.style, {
                                ...v,
                                transition: "all ".concat(r, "ms ").concat(l, " 1ms"),
                                width: "".concat(f, "px"),
                                height: "".concat(L, "px"),
                                top: "".concat(m - (o ? 0 : document.body.scrollTop), "px"),
                                left: "".concat(y - (o ? 0 : document.body.scrollLeft), "px")
                            }),
                            function(a, b) {
                                for (const e in a)
                                    if (a[e] !== b[e])
                                        return !1;
                                return !0
                            }(c(C, w), M) && _(),
                            map.delete(e)
                        }(y, e, f, m))) : console.warn("tag attr is required.")
                    },
                    componentUpdated(e, t) {
                        var n, o;
                        const l = t.value
                          , r = t.modifiers
                          , c = null !== (n = null == r ? void 0 : r.fixed) && void 0 !== n && n
                          , d = "string" == typeof l ? l : null == l ? void 0 : l.tag
                          , C = "string" == typeof l || null == l ? void 0 : l.style
                          , v = "string" != typeof l && (null !== (o = null == l ? void 0 : l.disabled) && void 0 !== o && o);
                        d ? v ? map.delete(d) : h(d, e, C, c) : console.warn("tag attr is required.")
                    }
                })
            }
        };
        o.default.use(l)
    },
    109: function(e, t, n) {
        "use strict";
        var o = n(1);
        n(60),
        n(61),
        n(62),
        n(63),
        n(64),
        n(65),
        n(66),
        n(67),
        n(68),
        n(69),
        n(70),
        n(71),
        n(72),
        n(11);
        const l = new Map
          , r = new Map
          , c = (e, t, data) => {
            var n, o;
            const l = (null === (n = e.data) || void 0 === n ? void 0 : n.on) || (null === (o = e.componentOptions) || void 0 === o ? void 0 : o.listeners);
            l && l[t] && l[t](data)
        }
          , d = (e, t, n) => {
            const o = new window.IntersectionObserver((e => {
                e.forEach((e => {
                    let {target: t, isIntersecting: n} = e;
                    var l, d, h, C, v, m, y, f, L, w, M, _, V, j, x, N;
                    const O = r.get(t);
                    if (!O)
                        return;
                    const k = {
                        isIntersecting: n
                    };
                    n ? ((null === (d = null === (l = O.value) || void 0 === l ? void 0 : l.className) || void 0 === d ? void 0 : d.enter) && t.classList.add(null === (C = null === (h = O.value) || void 0 === h ? void 0 : h.className) || void 0 === C ? void 0 : C.enter),
                    (null === (m = null === (v = O.value) || void 0 === v ? void 0 : v.className) || void 0 === m ? void 0 : m.leave) && t.classList.remove(null === (f = null === (y = O.value) || void 0 === y ? void 0 : y.className) || void 0 === f ? void 0 : f.leave),
                    c(O.vnode, "enter", k),
                    O.once && (o.unobserve(t),
                    r.delete(t))) : ((null === (w = null === (L = O.value) || void 0 === L ? void 0 : L.className) || void 0 === w ? void 0 : w.enter) && t.classList.remove(null === (_ = null === (M = O.value) || void 0 === M ? void 0 : M.className) || void 0 === _ ? void 0 : _.enter),
                    (null === (j = null === (V = O.value) || void 0 === V ? void 0 : V.className) || void 0 === j ? void 0 : j.leave) && t.classList.add(null === (N = null === (x = O.value) || void 0 === x ? void 0 : x.className) || void 0 === N ? void 0 : N.leave),
                    c(O.vnode, "leave", k)),
                    c(O.vnode, "change", k)
                }
                ))
            }
            ),{
                root: e && (null == n ? void 0 : n.root) ? e : null,
                rootMargin: (null == t ? void 0 : t.margin) || "0px",
                threshold: (null == t ? void 0 : t.threshold) || 0
            });
            return o
        }
        ;
        var h = {
            install(e, t) {
                const n = d(null, {
                    margin: null == t ? void 0 : t.margin,
                    threshold: null == t ? void 0 : t.threshold
                }, {});
                e.directive("iobs", {
                    inserted(e, t, o) {
                        var c;
                        const h = t.value
                          , C = t.modifiers
                          , v = null == h ? void 0 : h.name;
                        let m = n;
                        if (C.parent) {
                            if (m = d(e, h, C),
                            !v)
                                throw new Error("parent node required key");
                            l.set(v, m)
                        } else if (null == h ? void 0 : h.name) {
                            const e = l.get(h.name);
                            if (!e)
                                throw new Error("parent[".concat(h.name, "] is undefined"));
                            m = e
                        }
                        m.observe(e),
                        r.set(e, {
                            vnode: o,
                            value: h,
                            once: null !== (c = C.once) && void 0 !== c && c
                        })
                    },
                    unbind(e, t) {
                        const n = t.value
                          , o = null == n ? void 0 : n.name
                          , c = o ? l.get(o) : void 0;
                        c && (c.unobserve(e),
                        r.delete(e))
                    }
                })
            }
        };
        o.default.use(h, {
            margin: "-".concat(Math.max(50, .1 * innerHeight), "px 0px")
        })
    },
    140: function(e, t, n) {
        "use strict";
        t.a = {
            meta: {
                title: "Ambient Weaving ― 環境と織物",
                description: "伝統工芸と先端テクノロジーを掛け合わせた機能性テキスタイルの研究開発",
                keywords: "project foil,fashion tech,ゾゾ, スマートテキスタイル",
                "og:title": "Ambient Weaving ― 環境と織物",
                "og:description": "伝統工芸と先端テクノロジーを掛け合わせた機能性テキスタイルの研究開発",
                "og:image": "./assets/images/ogp/ja.png"
            },
            setup: {
                // description: "このサイトは音が流れます\n    サウンドをONにして\n    お楽しみください"
                description: ""
            },
            landscape: {
                description: "このサイトは画面を縦向きにして\n    お楽しみください"
            },
            home: {
                hero: {
                    title: "環境と織物"
                },
                intro: {
                    subtitle: "環境と織物",
                    content: ["テキスタイルは、ファッションから住環境に到るまで私たちの生活に欠かせないものです。近年では様々な機能が統合されたスマートテキスタイルの技術も盛んに開発され、さらなる利活用に向けた取り組みが盛んに行われています。", "株式会社ZOZO NEXTは2020年より東京大学筧康明研究室、株式会社細尾と共に、西陣織の伝統工芸技法に先端テクノロジーを組み合わせることで、機能と美しさを両立する新たなテキスタイルの開発を行ってきました。", "「環境情報を表現する織物」、「環境そのものが織り込まれた織物」を指す、Ambient Weavingのコンセプトを提案し、周囲の環境情報と織物を媒介する様々な機能と美を両立させた体験の拡張を試みました。", "織物を環境とのインタフェースとしてのアンビエントメディアと見立て、環境変化に呼応するように変化する布の表現や、環境に働きかけるように変化を生む布のありかたをプロトタイプを通じて提示します。"],
                    attention: "本サイトは2021年4月17日～2021年9月6日に開催された共同研究開発成果展示 Ambient Weaving ― 環境と織物をデジタルアーカイブ化したものです。"
                },
                partner: ["Ambient Weaving 環境と織物\n      共同研究開発成果展示", "開催期間：2021年4月17日(土)〜2021年9月6日(月）\n会場：HOSOO GALLERY\n〒604-8173 京都市中京区柿本町412 HOSOO FLAGSHIP STORE 2F", "株式会社 細尾\n      東京大学 筧康明研究室\n      株式会社ZOZO NEXT", "<small>研究開発：株式会社 細尾、東京大学 筧康明研究室、株式会社ZOZO NEXT\n      主催：株式会社 細尾、株式会社ZOZO NEXT\n      技術提供：株式会社 日本触媒\n\n      株式会社ZOZO NEXT\n      中丸啓、田島康太郎\n      メディア協力：藤嶋陽子\n      サイト制作協力：武田修平、権美愛\n\n      東京大学 筧康明研究室\n      研究・作品制作：筧康明、西原由実、久保木仁美、藤井樹里\n      研究協力：鳴海紘也\n\n      HOSOO GALLERY\n      リサーチ：原瑠璃彦\n      キュレーション：井高久美子\n      ディレクション：細尾真孝\n\n      展示構成：周防貴之\n      映像記録：桜木美幸、reckhahn\n      開発協力：松山真也（siro）、泉田隆介（マニュファクチュア）\n      データ・ヴィジュアライゼーション：蓑毛雄吾\n      宣伝美術 ディレクション・デザイン：森田明宏\n      写真・映像撮影：田中恒太郎\n      映像編集・音楽：佐久間海土\n      バーチャル展示会サイト制作：株式会社イメージソース 加藤雄也、佐々木伽耶人、本田純一、村田尚毅（株式会社 部室）</small>", '展示に関するお問い合わせ\n      <a href="https://corp.zozo.com/privacy/?type=press" target="_blank">株式会社ZOZO NEXT 広報担当</a>']
            },
            projects: [{
                code: "wave-of-warmth",
                title: "Wave of Warmth",
                kana: "ロイコ染料",
                phrase: "周辺環境の温度に応じて\n      呈色する織物",
                videoId: "HL1of6S6YoA",
                monyo: "紋様：Wave",
                description: "この作品は、周辺環境の温度に応じて織物の色が変化する。特定の温度に達すると呈色するロイコ色素を含んだインクを和紙の両面に塗工し、裁断することで、箔紙として緯糸に織り込んでいる。25度以上になると黒から青色に呈色し、温度が下がると黒色へと戻っていく。この可逆的かつリアルタイムの変化を通して、温度の変化を視覚的にも訴えることで人々の意識を開く。"
            }, {
                code: "drifting-colors",
                title: "Drifting Colors",
                kana: "クロマトグラフィー",
                phrase: "糸の中を染料が\n      移動する織物",
                videoId: "TBsNN-3wOXc",
                monyo: "紋様：Cleopatra",
                description: "クロマトグラフィーというロシアの植物学者ミハイル・ツヴェットが発明した物質を分離する技法を応用した織物である。本来、染色とは糸に染料を吸収させ、定着させることを指すが、この作品では、それぞれの染料の電荷・質量・疎水性の差により、異なる時間で糸の中を染料が移動する。湿度や水分量を適正に保つことで、この分離と移動が起こり、染料が糸へと浸透した後も動的に色が変化し続ける。"
            }, {
                code: "memories-of-flow",
                title: "Memories of Flow",
                kana: "UV硬化剤",
                phrase: "紫外光で瞬時に\n      硬化する織物",
                videoId: "9Q0wth5_Wps",
                monyo: "紋様：Stone",
                description: "細径のチューブを織り込んだ布に、紫外光を照射することで硬化するレジンを封入した作品。紫外光照射前は、柔軟性のある織物であるが、紫外光に晒すと数秒で硬化し、形が定着する。この作品では、織物を水が滞留する水槽内に入れ紫外光で硬化させることで、水の流れを織物に写し取っている。"
            }, {
                code: "woven-clouds",
                title: "Woven Clouds",
                kana: "PDLC",
                phrase: "光の透過度が\n      可変的な織物",
                videoId: "3RdKO4kiHXo",
                monyo: "紋様：Aura",
                description: "「Woven Clouds」は、光の透過度が可変的な織物。PDLC（高分子分散型液晶）を箔状に裁断し、緯糸として織り込んでいる。不透明な白色をした織物であるが、電圧を印可すると液晶分子が電界方向に配向し、光を透過させる。本来は環境の光を反射する静的な織物そのものが、動的に干渉することでその様態を変化させる。"
            }, {
                code: "woven-glow",
                title: "Woven Glow",
                kana: "有機EL",
                phrase: "電圧をかけると\n      発光する織物",
                videoId: "0qKzlgkTwGI",
                monyo: "紋様：Aura",
                description: "「Woven Glow」は、発光する織物。電圧をかけると有機物が自発光する有機ELダイオード(OLED)の箔を、緯糸として織り込んだ作品。Woven Glowと対をなす作品で、自らが発光することでその様態を変化させる。OLED箔は背面に配置されており、発光をしていないときは普通の西陣織と変わらない意匠として振る舞うことができる。"
            }, {
                code: "ambient-sensing-instruments-and-visualization",
                title: "Ambient sensing\ninstruments &\nvisualization",
                phrase: "温度、湿度、明度、CO<sub>2</sub>などの<br>環境情報のセンシングと可視化",
                monyo: "",
                description: "展示空間内の様々な場所にて、温度（サーモグラフィー）、湿度、明度、明度、CO<sub>2</sub>をセンシングする装置が設置されている。これらのセンサーによって取得されたデータは、それぞれの織物を取り巻く環境情報として3DCGによって可視化されている。\n      また温度や紫外線に反応し、色が変化する糸のスクリーンも、センサーとして展示空間に配置されている。",
                isCustomDetail: !0
            }, {
                code: "historical-research",
                title: "Historical Research",
                phrase: "人間と布の歴史の\n      多角的なリサーチ",
                monyo: "",
                description: "環境と織物 - 環境を纏う\n\n      人は古来、織物を纏って生きてきた。\n      人にとってもっとも――まさに文字通りに――身近な事物とは、織物であるかもしれない。\n      織物とは、人と環境の間に介在するメディアである。\n      そして、織物自体に、環境が様々なかたちで取り入れられてきた。\n      それを「自然」と考えることもできるであろう。\n      しかしながら、「人新世（Anthropocene）」とも呼ばれる今日、かつてのように環境＝自然という図式は自明ではなくなり、「自然」という概念そのものが問われている。\n      環境（ambience）という観点から、織物の歴史を振り返る。"
            }],
            collection: {
                message: "伝統工芸とテクノロジーが織りなす、\n    <br />\n    機能性と美を両立するテキスタイルへの挑戦",
                description: "東京大学筧研究室、株式会社 細尾、株式会社ZOZO NEXTの３社は2020年より新規テキスタイルの共同研究開発プロジェクトを開始しました。\n    <br />\n    本プロジェクトでは「周囲の環境情報と織物を媒介する様々な機能と表現の両立」を目指し、「環境情報を表現する織物」「環境そのものが織り込まれた織物」を意味するAmbient Weavingのコンセプトを創案し、作品を通じて発表してきました。\n    <br />\n    <br />\n    本展示会では、筧研究室のインタラクション技術、アート・デザインの知見とZOZO NEXTの先端素材やデバイス技術、そして細尾の西陣織の技法と意匠が融合した機能性と美を両立した作品やプロトタイプをAmbient Weaving Collectionという形で選定し、一挙に公開します。\n    <br />\n    <br />\n    海外展示会で注目を集めた 「STARTS Prize 2022」栄誉賞受賞作品のうち2作品に加え、今回新たに研究開発を進めるプロトタイプシリーズWoven Prototypes (WP) から国内外で一般初公開となる展示を行います。カーボン製の素材を織り込むことで梁構造を内包することで様々な形状に組み立て可能な「WP004 &lt;Pillars&gt;」や、緯糸の有機EL箔と経糸の導電糸を正確に織り込むことでドットマトリックス状に発光するテキスタイルディスプレイ「WP007 &lt;Pixels&gt;」といった新たな技術要素を盛り込んだプロトタイプをご覧いただけます。",
                event: {
                    subTitle: '東京大学・株式会社 細尾・株式会社ZOZO NEXT <br data-sp-only="true" />共同研究成果展示',
                    dateKey: "会期・時間",
                    dateValue: '2023年8月1日（火）\n      <br data-pc-only="true" />\n      12:00-17:00\n      <br data-pc-only="true" />\n      <br />\n      2023年8月2日（水）～8月7日（月）\n      <br />\n      11:00-20:00',
                    placeKey: "会場",
                    placeValue: "東京都千代田区丸の内2-5-2三菱ビル1F",
                    priceKey: "入場料",
                    priceValue: "無料",
                    placeDescription: "Have a Nice Tokyo!（略称：HaNT）は、丸の内エリアの就業者や来街者、国内外の旅行者に向けて、東京と日本の魅力を発信するツーリスト・コミュニケーション・センターです。\n      本施設は、東京や日本全国の観光資源・文化・食・技術といった多彩な魅力を国内外に向けて発信する場として、観光機能、情報発信機能、物販機能の 3 つの機能を有しています。"
                },
                about: {
                    description: '本コレクションは、共同研究プロジェクトにおいて創案したコンセプトを表現した展示"Ambient Weaving --環境と織物"から２作品, 研究開発の技術シーズを具体化したプロトタイプ群 "Woven Prototypes" から６作品を厳選したものです。',
                    ambient1Description: "周辺環境の温度に応じて色が変化する織物です。\n      特定の温度に達すると呈色するロイコ色素を含んだインクを和紙の両面に塗工し、裁断することで、箔紙として緯糸に織り込んでいます。25度以上になると黒から青色に呈色し、温度が下がると黒色へと戻っていきます。この可逆的かつリアルタイムの変化を通して、温度の変化を視覚的にも訴えることで人々の意識を開きます。",
                    ambient1Note: "意匠 / Wave\n      <br />\n      素材 / Silk, Polyester, Washi + Silver, Nylon, Leuco laminated thred",
                    ambient2Description: "クロマトグラフィーというロシアの植物学者ミハイル・ツヴェットが発明した物質を分離する技法を応用した織物です。\n      本来、染色とは糸に染料を吸収させ、定着させることを指しますが、この作品では、それぞれの染料の電荷・質量・疎水性の差により、異なる時間で糸の中を染料が移動します。湿度や水分量を適正に保つことで、この分離と移動が起こり、染料が糸へと浸透した後も動的に色が変化し続けます。",
                    ambient2Note: "意匠 / Cleopatra\n      <br />\n      素材 / Rayon, Cotton, Polyester, Nylon, Polyolefin heat shrink tubing",
                    woven001Description: "この織物は圧電性を有する高分子フィルムの両面に電極を設けた素材を引き箔として織り込み、スピーカーとして機能します。\n      緯糸の部分のみがオーディオの電気信号により振動するため、特定部位のみに音を発生させたり、形状に応じて音の広がりを変化させたりすることができます。また、織物は外の音を透過するため、環境音に織物からの音を重畳する等、従来とは異なる音の演出を実現します。",
                    woven001Note: "意匠 / Wave\n      <br />\n      素材 / Silk, Polyester, Cupra, Rayon, Piezoelectric film",
                    woven002Description: "この織物は入射光と観察者の位置により見え方が変化します。\n      再帰性反射性のビーズと薄膜干渉層を備えた特殊な箔糸が織り込まれており、入射光の角度に応じた光路長に対応する干渉色を示します。西陣織の立体構造により、同じ箔糸でありながら多様な色が表れ、観測者との相対的な位置関係により、見え方が変化する様子を鑑賞できます。本プロトタイプの技術は量産織機を用いた大型化も可能となっています。",
                    woven002Note: "意匠 / Lightning\n      <br />\n      素材 / Polyester, Washi + Silver, Retroreflective thred",
                    woven003Description: "2枚の織物を重ね、光が透過すると発色する仕組みを持つインスタレーション。\n      偏光板とOPPテープで構成された箔が織り込まれ、光が織物を重ねた状態で透過すると複屈折による光の干渉により偏光色が表れます。同じ素材ながらも偏光板の向きやテープの厚みを変えることで複数の色を表現し、また箔の順番のアレンジにより様々な色パターンを生成します。鑑賞位置によってもその見た目は動的に変化します。",
                    woven003Note: "意匠 /Ripple Marks\n      <br />\n      素材 / Silk, Bemberg, Polyester, Washi + silver, Nylon, Polarizer, OPP tape",
                    woven004Description: "巻き取れる1枚の布から立体形状に変形可能な織物。2種類の長さの靭性のあるカーボンバーが緯糸の一部に織り込まれています。\n      バーの端部をスナップボタンで接続することで織物は立体へ変化します。形状はシミュレーションにより設計され、接続順序・位置を変えることで同じ織物から複数の異なる形の立体が構成できます。今回展示される3つの立体は、それぞれ蕾・半開き・全開の花をイメージし、同一設計の織物から造形されました。",
                    woven004Note: "意匠 / Wave\n      <br />\n      素材 / Silk, Polyester, Rayon, Washi + Silver, Acrylic, Carbon bar",
                    woven006Description: "特殊な箔素材の重ね合わせにより、表面と影が異なる様態を示す織物です。\n      緯糸として用いるフィルムの表面に微細構造を制御したインクによる印刷パターンを施すことで特定の波長を反射し、金属光沢のような質感を生み出します。このフィルムを複数枚特定の順序で重ねて織り込むことで、織物の透過光とフィルム裏面からの反射光が重畳し、色の変化だけではなく印刷パターンの周期的なずれによるモアレパターンが現れます。",
                    woven006Note: "意匠 / Ripple Marks\n      <br />\n      素材 / Silk, Polyester, Rayon, Washi + silver, Nylon, Structure colored film",
                    woven007Description: "この織物はドットマトリクス状に発光する機能を持ちます。\n      箔に電流を流すと、緯糸に織り込まれた有機ELダイオード (OLED) 箔が自発光します。OLED箔と、経糸の導電糸との交差によりマトリクス状の回路を構成しています。箔は背面に配置され、非発光時にも西陣織の意匠を損なうことはありません。しなやかさや織長に応じたスケーラブルな設計が可能です。",
                    woven007Note: "意匠 / Blink\n      <br />\n      素材 / Silk, Polyester, Washi + Silver, Nylon, Organic light-emitting diode (OLED)"
                },
                ogpDescription: "東京大学筧研究室、株式会社 細尾、株式会社ZOZO NEXTの3社は2020年より新規テキスタイルの共同研究開発プロジェクトを開始しました。本展示会では、筧研究室のインタラクション技術、アート・デザインの知見とZOZO NEXTの先端素材やデバイス技術、そして細尾の西陣織の技法と意匠が融合した機能性と美を両立した作品やプロトタイプをAmbient Weaving Collectionという形で選定し、一挙に公開します。"
            }
        }
    },
    141: function(e, t, n) {
        "use strict";
        t.a = {
            meta: {
                title: "Ambient Weaving - Environment and Textile",
                description: "Research and Development of Functional Textiles combined Traditional Crafts with Advanced Technology",
                keywords: "project foil,fashion tech,smart textile",
                "og:title": "Ambient Weaving - Environment and Textile",
                "og:description": "Research and Development of Functional Textiles combined Traditional Crafts with Advanced Technology",
                "og:image": "./assets/images/ogp/en.png"
            },
            setup: {
                description: "This website includes audio.\nPlease turn your sound on."
            },
            landscape: {
                description: "Please view this website\nin portrait mode."
            },
            home: {
                hero: {
                    title: ""
                },
                intro: {
                    subtitle: "",
                    content: ["From shaping fashion to our living environments, textiles are indispensable to our everyday lives.  Over recent years, the integration of a variety of functionalities into fabrics in conjunction with the exploration of a range of applications have been under development through the creation of smart textiles.", "During 2020, ZOZO NEXT have collaborated with Yasuaki Kakehi Lab, The Univ of Tokyo and HOSOO to research the synthesis of technology in the traditional Japanese craft of Nishijin silk fabrics. Through combining technical functionality with beauty, the creation of new textiles have been achieved.", "The concept of Ambient Weaving focuses on ‘The expression of ambience through textiles’,and ‘Weaving environments into fabrics’. The proposal aims to use textiles as a medium to display the information gained from our surroundings and turn this into a beautiful, elevated experience.", "Fabrics have been chosen as an interface for ambient media by expressing its response to the surrounding environment. The way in which this has been achieved is displayed through the exhibited prototypes."],
                    attention: "This site is a digital archive of the joint research and development results exhibition Ambient Weaving － Environment and Textiles, held from April 17, 2021 to September 6, 2021 at HOSOO GALLERY."
                },
                partner: ["Ambient Weaving - Textiles and its Environment", "Event Dates : April 17, 2021 to September 6, 2021\n      Venue : HOSOO GALLERY\n      412 Kakimotocho, Nakagyo Ward, Kyoto, 604-8173", "Hosoo Co, Ltd.,\n      Yasuaki Kakehi Lab, The Univ. of Tokyo\n      ZOZO NEXT, Inc.", "<small>R&D : Hosoo Co, Ltd., Yasuaki Kakehi Lab, The Univ. of Tokyo, ZOZO NEXT, Inc.\n      Organizer : Hosoo Co, Ltd., ZOZO NEXT, Inc.\n      Technical Cooperation : Nippon Shokubai Co., Ltd.\n\n      ZOZO NEXT, Inc.\n      Satoshi Nakamaru, Kotaro Tajima\n      Media Cooperation : Yoko Fujishima\n      Website Development Cooperation : Shuhei Takeda, Mie Kwon\n\n      Yasuaki Kakehi Lab, The Univ. of Tokyo\n      Research and Artwork Production : Yasuaki Kakehi, Yumi Nishihara, Hitomi Kuboki, Juri Fujii\n      Research Cooperation : Koya Narumi\n\n      HOSOO GALLERY\n      Research : Rurihiko Hara\n      Curation : Kumiko Idaka\n      Direction : Masataka Hosoo\n\n      Space Design : Takayuki Suo\n      Video Recording : Yoshiyuki Sakuragi, Joung Min Han\n      Development Cooperation : Shinya Matsuyama (siro), Takayuki Izumida (manufacturer)\n      Data Visualization : Yugo Minomo\n      Advertising Art Direction and Design : Akihiro Morita\n      Photography and Videography : Kotaro Tanaka\n      Video Editing and Music : Kaito Sakuma\n      Website Development : IMG SRC Inc. Yuya Kato, Kayato Sasaki, Junichi Honda, Naoki Murata (Bushitsu Inc.)</small>", 'Please contact below for further information\n      <a href="https://corp.zozo.com/privacy/?type=press" target="_blank">ZOZO NEXT, Inc. PR Manager</a>']
            },
            // projects: [{
            //     code: "wave-of-warmth",
            //     title: "Wave of Warmth",
            //     kana: "Leuco Pigment",
            //     phrase: "Textile which responds to changes\nin atmospheric temperature through colour.",
            //     videoId: "VNtQ-Q6BAyY",
            //     monyo: "Pattern: Wave",
            //     description: "In this work, the color of the fabric changes according to the temperature of the surrounding environment. When the temperature reaches 25 degrees celsius or higher, the fabric responds by changing its color from black to blue. When temperatures drop, the color then returns to black. This reversible and real-time transformation opens people's consciousness by visually appealing to changes in temperature."
            // }, {
            //     code: "drifting-colors",
            //     title: "Drifting Colors",
            //     kana: "Chromatgraphy",
            //     phrase: "Textile in which the dye\n      moves through the yarn",
            //     videoId: "NwXq2LjlpUQ",
            //     monyo: "Design: Cleopatra",
            //     description: "This textile applies chromatography, a technique for separating substances invented by the Russian botanist Mikhail Tsvett. Dyeing originally refers to the absorption and fixation of dyestuffs to the yarn. However, in this work, the dyestuffs move through the yarn at different times due to each dye's differences in charge, mass, and hydrophobicity. Maintaining the humidity and moisture levels prevents this separation, allowing movement and thus the color changes dynamically even after the dye has penetrated the yarn."
            // }, {
            //     code: "memories-of-flow",
            //     title: "Memories of Flow",
            //     kana: "UV curing agent",
            //     phrase: "Textile that cures instantly\n      with ultraviolet light",
            //     videoId: "LQoMKrxx974",
            //     monyo: "Design: Stone",
            //     description: "Woven into this textile are fine tubes filled with a resin which hardens when exposed to ultraviolet light. The textile is flexible prior to exposure, but will set and take shape after a few seconds of being revealed to ultraviolet light. Here, the fabric is cured inside a water tank to capture the flow and movement of water on the textile."
            // }, {
            //     code: "woven-clouds",
            //     title: "Woven Clouds",
            //     kana: "PDLC",
            //     phrase: "Textiles with variable\n      light transmission",
            //     videoId: "ZKs6lncz_fM",
            //     monyo: "Design:Aura",
            //     description: "Woven Clouds is a fabric with variable light transmission, made by cutting PDLC (polymer-dispersed liquid crystal) into foil-like pieces and weaving them together as a weft. The PDLC foil is an opaque white color, but when voltage is applied, the liquid crystal molecules are oriented in the direction of the electric field, allowing light to pass through. The static fabric itself, which originally reflects the light of the environment, changes its appearance by dynamically interfering with it."
            // }, {
            //     code: "woven-glow",
            //     title: "Woven Glow",
            //     kana: "organic electro luminescence",
            //     phrase: "Luminescent Textile",
            //     videoId: "DDHg6i0esQM",
            //     monyo: "Design:Aura",
            //     description: "Woven Glow is a luminous textile. Woven into the weft of Nishijin textile is an organic light-emitting diode (OLED) foil, which emits light when voltage is applied. The OLED foil is integrated on the back, and when light is not emitted, it is no different from ordinary Nishijin textile."
            // }, {
            //     code: "ambient-sensing-instruments-and-visualization",
            //     title: "Ambient sensing\ninstruments &\nvisualization",
            //     phrase: "Sensing and visualization of environmental\n      information such as temperature, humidity,\n      brightness, and CO<sub>2</sub> concentration",
            //     monyo: "",
            //     description: "Sensing devices for temperature (thermography), humidity, light intensity, brightness, and CO<sub>2</sub> have been installed throughout various locations of the exhibition space. The data acquired from these sensors is visualized by 3DCG as environmental information surrounding each textile. A screen of yarn responding to temperature and ultraviolet light through changes in color is also placed in the exhibition space as a sensor.",
            //     isCustomDetail: !0
            // }, {
            //     code: "historical-research",
            //     title: "Historical Research",
            //     phrase: "A multifaceted research\n      on the history of humans and textile",
            //     monyo: "",
            //     description: '"Environment and Textiles - Wearing the Environment"\n\n      Since ancient times, people have lived clothed in textiles.\n      The most familiar thing to people - quite literally - might be textiles.\n      Textiles are the media that intervene between people and the environment.\n      The environment has been incorporated into the textiles themselves in various ways.\n      We can think of it as "nature".\n      However, in today\'s "Anthropocene," we cannot assume that the environment = nature as in the past.\n      The concept of "nature" itself is being questioned. We will look back at the history of textiles from the perspective of ambience.'
            // }],
            // collection: {
            //     message: "The pursuit of creating textiles that combine functionality with beauty by weaving traditional crafts and technologies.",
            //     description: "In 2020, Yasuaki Kakehi Lab, UTokyo, Hosoo Co., Ltd., and ZOZO NEXT, Inc. launched a joint research and development project for new textiles. Aiming to combine various functions and expressions that mediate between the surrounding environmental information and textiles, this project has created the concept of <i>Ambient Weaving</i>, which refers to textiles that express environmental information or weaving the environment itself into textiles, and has presented this concept through various artworks.\n    <br />\n    <br />\n    In this exhibition, we present <i>The Ambient Weaving Collection</i> which is a collection of works and prototypes that combine functionality with beauty by integrating the interaction technologies and knowledge of art and design from Yasuaki Kakehi Lab, the advanced materials and device technologies from ZOZO NEXT, and the techniques and designs of Hosoo's Nishijin brocade.\n    <br />\n    <br />\n    In addition to two works that were part of receiving <i>the STARTS Prize Honorary Mention 2022</i> that have attracted attention at overseas exhibitions, a new series of prototypes from ongoing research and development called <i>Woven Prototypes (WP)</i> will be exhibited for the first time domestically and internationally. From textiles which can be assembled into various shapes by weaving carbon material as beam structures (<i>WP004 &lt;Pillars&gt;</i>) to textile displays that emit light in a dot matrix by precisely weaving in organic EL foils for the weft and conductive threads for the warp (<i>WP007 &lt;Pixels&gt;</i>), a number of prototypes incorporating new technological elements will be on display.\n    ",
            //     event: {
            //         subTitle: "Yasuaki Kakehi Lab, UTokyo  ×  Hosoo Co., Ltd.  ×  ZOZO NEXT, Inc.<br />Exhibition of Joint Research Results",
            //         dateKey: 'Dates &<br data-sp-only="true" />Hours',
            //         dateValue: 'Tuesday, August 1, 2023\n      <br />\n      12:00-17:00\n      <br />\n      <br data-pc-only="true" />\n      Wednesday, August 2 - Monday, <br data-sp-only="true" />August 7, 2023\n      <br />\n      11:00-20:00\n      ',
            //         placeKey: "Venue",
            //         placeValue: "Mitsubishi Building 1F, 2-5-2<br />Marunouchi, Chiyoda-ku, Tokyo",
            //         priceKey: "Admission",
            //         priceValue: "Free",
            //         placeDescription: "<i>Have a Nice Tokyo! (HaNT)</i> is a tourist communication center that presents the attractions of Tokyo and Japan to workers and visitors in the Marunouchi area, as well as to domestic and international tourists. As a venue for informing people in Japan and abroad the diverse attractions of Tokyo and Japan, including tourism resources, culture, food, and technology, this facility serves three functions: tourism, information dissemination, and product sales."
            //     },
            //     about: {
            //         description: "This curated collection comprises two pieces from the exhibition <i>Ambient Weaving - Environments and Textiles</i>, embodying the concepts developed in a joint research project. Additionally, 6 works were carefully selected from <i>Woven Prototypes</i>, a number of prototypes which materialize technological seeds of on-going research and development endeavours. ",
            //         ambient1Description: "In this work, the color of the fabric changes according to the temperature of the surrounding environment. By coating both sides of Japanese <i>washi</i> paper with ink containing leuco pigment that changes color when it reaches a certain temperature, and cutting it, the paper is woven into the weft as foil paper. When the temperature rises above 25 degrees celsius, the color changes from black to blue, and when the temperature drops, the color returns to black. This reversible and real-time transformation opens people's consciousness by visually appealing to changes in temperature.",
            //         ambient1Note: "Pattern / Wave\n      <br />\n      Material / Silk, Polyester, Washi + Silver, Nylon, Leuco laminated thred",
            //         ambient2Description: "This textile applies chromatography, a technique for separating substances invented by the Russian botanist Mikhail Tsvett. Dyeing originally refers to the absorption and fixation of dye to thread. However, in this work, each dye moves through the thread at different speeds due to the differences in charge, mass, and hydrophobicity. Maintaining the humidity and moisture levels causes this separation and movement, allowing the color to change dynamically even after the dye has penetrated the thread.",
            //         ambient2Note: "Pattern / Cleopatra\n      <br />\n      Material / Rayon, Cotton, Polyester, Nylon, Polyolefin heat shrink tubing",
            //         woven001Description: "This textile functions as a speaker by weaving in piezoelectric polymer films with electrodes on both sides as foils. The audio-electrical signals exclusively make the weft portions vibrate, causing selective regions to generate sound. Sound dispersion can also be modified based on the textile's form. Moreover, as the textile can let external sounds pass through, this textile can facilitate unconventional sound effects such as superimposing sound from the textile onto environmental sounds.",
            //         woven001Note: "Pattern / Wave\n      <br />\n      Material / Silk, Polyester, Cupra, Rayon, Piezoelectric film",
            //         woven002Description: "The appearance of this textile changes depending on the incident light and the observer’s position. Foil threads with retroreflective beads and a thin interference layer are woven into the textile, showing interference colors corresponding to the optical length of the incident light’s angle. Due to the three-dimensional structure of <i>Nishijin</i>, the foil threads display a spectrum of colors, enabling viewers to appreciate the change in appearance caused by the relative position between the textile and the observer. The technology of this prototype can also be woven at a larger scale using mass production looms.",
            //         woven002Note: "Pattern / Lightning\n      <br />\n      Material / Polyester, Washi + Silver, Retroreflective thred",
            //         woven003Description: "In this installation, light is shone through two overlapping textiles to reveal color. Foils consisting of polarizers and Oriented Polypropylene (OPP) tape are woven into the textiles. As light traverses through the overlaid textiles, birefringence occurs, causing polarized colors to appear. Despite utilizing the same materials, the textiles exhibit multiple colors by altering the orientation of the polarizers, adjusting the thickness of the tape and arranging the sequence of foils to create a color pattern. The textiles’ appearance also dynamically changes depending on the viewed position.",
            //         woven003Note: "Pattern /Ripple Marks\n      <br />\n      Material / Silk, Bemberg, Polyester, Washi + silver, Nylon, Polarizer, OPP tape",
            //         woven004Description: "This rollable piece of textile can be formed into three-dimensional shapes. Tough carbon bars in two lengths are woven into the weft in intervals. The ends of these bars can be connected using snap buttons, allowing the textile to transition into three-dimensional forms which were designed through simulations. By altering the order and positioning of connections, it is possible to create multiple shapes using the same textile. The three exhibited shapes represent the stages of a blooming flower (a bud, half-opened and fully-opened) and were made using the same textile design.  ",
            //         woven004Note: "Pattern / Wave\n      <br />\n      Material / Silk, Polyester, Rayon, Washi + Silver, Acrylic, Carbon bar",
            //         woven006Description: "The surface and shadow of this textile shows different appearances through the layering of specialized foil materials. By printing a pattern with microstructure-controlled ink on the surface of the film woven as the weft of the textile, it selectively reflects specific wavelengths to create a metallic sheen. Through overlapping multiple films in a particular order and weaving them into the textile, the textile’s transmitted light and reflected light from the back side superimpose. This gives rise to color variations and moiré patterns stemming from periodic shifts in the intricate printing pattern.",
            //         woven006Note: "Pattern / Ripple Marks\n      <br />\n      Material / Silk, Polyester, Rayon, Washi + silver, Nylon, Structure colored film",
            //         woven007Description: "This textile emits light in a dot matrix configuration. The organic light emitting diodes (OLED) foils woven into the weft of this textile produce light upon applying an electric current to them. The intersecting points between the OLED and the conductive threads utilized as the warp establish the matrix circuit. As the foils are woven to the back side of the textile, they do not interfere with the <i>Nishijin’s</i> design even when the lights are off. Furthermore, it is possible to design flexible textiles in a weaving length that is scalable.",
            //         woven007Note: "Pattern / Blink\n      <br />\n      Material / Silk, Polyester, Washi + Silver, Nylon, Organic light-emitting diode (OLED)"
            //     },
            //     ogpDescription: "In 2020, Yasuaki Kakehi Lab, UTokyo, Hosoo Co., Ltd., and ZOZO NEXT, Inc. launched a joint research and development project for new textiles."
            // }
        }
    },
    144: function(e, t, n) {
        "use strict";
        n(11);
        var o = n(2);
        var l = (e, t, n) => {
            const o = []
              , l = [];
            for (; e--; )
                l.push(new Promise((e => {
                    o.push(e)
                }
                )));
            return Promise.all(l).then(t, n),
            o
        }
          , r = n(26)
          , c = Object(o.b)({
            name: "DefaultLayout",
            setup() {
                const {i18n: e, localePath: t, $virtualScroll: n} = Object(o.l)()
                  , c = Object(o.n)()
                  , d = Object(o.o)()
                  , h = Object(o.j)(!1)
                  , C = Object(o.j)(!1)
                  , v = Object(o.j)(!1)
                  , m = Object(o.j)(!1)
                  , y = Object(o.j)(!1)
                  , f = Object(o.j)(null)
                  , cursor = Object(o.j)(null)
                  , L = Object(o.j)(decodeURIComponent(c.value.query.from || ""))
                  , w = Object(o.j)("")
                  , main = Object(o.j)();
                let M = !0;
                const _ = () => {
                    var e, t;
                    return 90 === Math.abs(null !== (t = null === (e = screen.orientation) || void 0 === e ? void 0 : e.angle) && void 0 !== t ? t : window.orientation)
                }
                  , V = () => {
                    f.value && f.value.paused && (v.value = !0,
                    f.value.play())
                }
                  , j = () => {
                    f.value && !f.value.paused && (v.value = !1,
                    f.value.pause())
                }
                  , [x,N] = l(2, ( () => {
                    r.b.value = r.a.setup
                }
                ))
                  , O = Object(o.j)(0);
                return Object(o.h)("isFullscreen", w),
                Object(o.h)("isPlayingBGM", Object(o.i)(v)),
                Object(o.h)("playBGM", V),
                Object(o.h)("pauseBGM", j),
                Object(o.h)("scrollTop", O),
                Object(o.p)(w, (e => {
                    M = !!e
                }
                )),
                Object(o.m)(( () => {
                    const meta = e.t("meta")
                      , t = e.locale
                      , n = "https://ambientweaving.lab.zozo.jp"
                      , path = "/" === c.value.path ? "" : "".concat(c.value.path, "/")
                      , o = "".concat(n).concat(path)
                      , image = "".concat(n).concat(meta["og:image"]);
                    return {
                        htmlAttrs: {
                            lang: t
                        },
                        title: meta.title,
                        meta: [{
                            hid: "description",
                            name: "description",
                            content: meta.description
                        }, {
                            property: "og:locale",
                            content: t
                        }, {
                            property: "og:title",
                            content: meta["og:title"],
                            hid: "og:title"
                        }, {
                            property: "og:description",
                            content: meta["og:description"],
                            hid: "og:description"
                        }, {
                            property: "og:url",
                            content: o,
                            hid: "og:url"
                        }, {
                            property: "og:image",
                            content: image,
                            hid: "og:image"
                        }, {
                            name: "twitter:title",
                            content: meta["og:title"],
                            hid: "twitter:title"
                        }, {
                            name: "twitter:description",
                            content: meta["og:description"],
                            hid: "twitter:description"
                        }, {
                            name: "twitter:image:src",
                            content: image,
                            hid: "twitter:image:src"
                        }]
                    }
                }
                )),
                Object(o.f)(( () => {
                    var e;
                    if (r.b.value = r.a.loading,
                    null === (e = f.value) || void 0 === e || e.load(),
                    setTimeout(N, 1500),
                    Object(r.c)(( () => {
                        const e = main.value
                          , t = {
                            target: 0,
                            bounding: 0,
                            ease: .115,
                            timeStamp: 0
                        };
                        let o = 0
                          , l = 0;
                        const r = new n({
                            el: document.scrollingElement,
                            mouseMultiplier: .5,
                            touchMultiplier: 2.5,
                            preventTouch: !0,
                            passive: !1
                        })
                          , c = () => {
                            const n = e.getBoundingClientRect().height
                              , o = n - innerHeight;
                            t.bounding !== o && (t.bounding = o,
                            document.body.style.height = "".concat(n, "px")),
                            t.target = Math.min(t.bounding, t.target)
                        }
                        ;
                        r.on((e => {
                            const n = e.originalEvent.timeStamp;
                            e.originalEvent.preventDefault(),
                            n - l > 1e3 && (l = n,
                            c()),
                            M || d(t.target - e.deltaY)
                        }
                        ));
                        const d = e => {
                            t.target = Math.round(Math.max(0, Math.min(e, t.bounding))),
                            O.value !== t.target && (cancelAnimationFrame(o),
                            o = requestAnimationFrame((e => {
                                t.timeStamp = e,
                                h(e)
                            }
                            )))
                        }
                          , h = n => {
                            const {target: l, ease: r, timeStamp: c} = t;
                            let d, C = O.value;
                            if (C !== l) {
                                for (d = Math.max(1, Math.floor((n - c) / 16.666666666666668)),
                                o = requestAnimationFrame(h); d--; )
                                    C += (l - C) * r;
                                Math.abs(C - l) < .1 && (C = l),
                                t.timeStamp = n,
                                O.value = C,
                                e.style.transform = "translateY(".concat(-C, "px)")
                            } else
                                document.scrollingElement.scrollTop = l
                        }
                        ;
                        window.addEventListener("scroll", ( () => {
                            var n, o;
                            const l = null !== (o = null === (n = document.scrollingElement) || void 0 === n ? void 0 : n.scrollTop) && void 0 !== o ? o : 0;
                            M ? (t.target = l,
                            O.value = l,
                            e.style.transform = "translateY(".concat(-l, "px)")) : d(l)
                        }
                        ), {
                            passive: !0
                        }),
                        window.addEventListener("resize", ( () => c()), {
                            passive: !0
                        })
                    }
                    )),
                    /(ipad|iphone|ipod|android)/.test(navigator.userAgent.toLowerCase())) {
                        const body = document.body
                          , e = "landscape";
                        h.value = _(),
                        body.style.setProperty("--vh", "".concat(innerHeight, "px")),
                        h.value && body.classList.add(e),
                        window.addEventListener("orientationchange", ( () => {
                            h.value = _(),
                            requestAnimationFrame(( () => {
                                h.value ? (body.classList.add(e),
                                M = !0) : (body.classList.remove(e),
                                w.value || (M = !1)),
                                document.body.style.setProperty("--vh", "".concat(innerHeight, "px"))
                            }
                            ))
                        }
                        ))
                    } else if (cursor.value) {
                        const e = cursor.value
                          , body = document.scrollingElement || (navigator.userAgent.toLowerCase().includes("webkit") ? document.body : document.documentElement);
                        let t = innerWidth / 2
                          , n = innerHeight / 2
                          , o = 0
                          , l = 0;
                        const r = (e, t) => {
                            o = e,
                            l = t
                        }
                          , c = (t, n) => {
                            e.style.width = "".concat(t, "px"),
                            e.style.height = "".concat(n, "px")
                        }
                          , d = () => {
                            e.style.width = "",
                            e.style.height = ""
                        }
                          , h = () => {
                            if (requestAnimationFrame(h),
                            t === o && n === l)
                                return;
                            const r = Math.abs(o - t) > .01 ? t + .15 * (o - t) : o
                              , c = Math.abs(l - n) > .01 ? n + .15 * (l - n) : l;
                            e.style.transform = "translate(-50%, -50%) translate(".concat(r, "px, ").concat(c, "px)"),
                            t = r,
                            n = c
                        }
                        ;
                        window.addEventListener("mousemove", (function e(t) {
                            window.removeEventListener("mousemove", e),
                            m.value = !0,
                            r(t.clientX, t.clientY),
                            requestAnimationFrame(h),
                            window.addEventListener("mousemove", (e => {
                                y.value || r(e.clientX, e.clientY)
                            }
                            ), {
                                passive: !0
                            }),
                            window.addEventListener("mouseover", (e => {
                                let t = e.target;
                                for (; t && t !== body; ) {
                                    const e = t
                                      , n = e.tagName.toLowerCase();
                                    if ("a" === n || "button" === n) {
                                        const {left: t, top: n, width: o, height: l} = e.getBoundingClientRect();
                                        return y.value = !0,
                                        r(t + o / 2, n + l / 2),
                                        void (e.classList.contains("cursor-hover-fit") && c(o, l))
                                    }
                                    t = e.parentElement
                                }
                                d(),
                                y.value = !1
                            }
                            ), {
                                passive: !0
                            })
                        }
                        ), {
                            passive: !0
                        })
                    }
                    window.$nuxt.$on("after-enter", ( () => {
                        M = !1
                    }
                    ))
                }
                )),
                d.beforeEach(( (e, t, n) => {
                    const o = e.query.from;
                    L.value = "string" == typeof o ? decodeURIComponent(o) : "",
                    C.value = !1,
                    M = !0,
                    n()
                }
                )),
                {
                    main: main,
                    i18n: e,
                    hasMouseEvent: m,
                    cursorHover: y,
                    cursor: cursor,
                    isFullscreen: w,
                    historyBack: L,
                    Phase: r.a,
                    phase: r.b,
                    bgm: f,
                    isLandscape: h,
                    visibleMenu: C,
                    isPlaying: v,
                    playBGM: V,
                    pauseBGM: j,
                    isHome: Object(o.a)(( () => {
                        var e;
                        return 0 === (null === (e = c.value.name) || void 0 === e ? void 0 : e.indexOf("index"))
                    }
                    )),
                    handleToggleMenu() {
                        w.value ? w.value = "" : L.value ? d.push(t(L.value)) : C.value = !C.value
                    },
                    onBGMLoaded() {
                        x()
                    },
                    initialize(e) {
                        e && V(),
                        r.b.value = r.a.done,
                        M = !1
                    }
                }
            },
            head: {}
        })
          , d = n(98)
          , h = n(19);
        var component = Object(h.a)(c, (function() {
            var e, t, o, l = this, r = l.$createElement, c = l._self._c || r;
            return c("div", [c("audio", {
                ref: "bgm",
                class: l.$style.bgm,
                attrs: {
                    loop: "",
                    crossOrigin: "anonymous"
                },
                on: {
                    loadeddata: l.onBGMLoaded
                }
            }, [c("source", {
                attrs: {
                    src: "./assets/sounds/bgm.ogg",
                    type: "audio/ogg"
                }
            }), l._v(" "), c("source", {
                attrs: {
                    src: "./assets/sounds/bgm.mp3",
                    type: "audio/mpeg"
                }
            })]), l._v(" "), c("portal-target", {
                attrs: {
                    name: "prepend",
                    slim: ""
                }
            }), l._v(" "), c("transition", {
                attrs: {
                    name: "fade"
                }
            }, [l.isHome ? l._e() : c("button", {
                class: [l.$style.menu_btn, (e = {},
                e[l.$style["menu_btn--opened"]] = l.visibleMenu || l.historyBack || l.isFullscreen,
                e)],
                attrs: {
                    type: "button"
                },
                on: {
                    click: l.handleToggleMenu
                }
            }, [c("i", {
                class: [l.$style.menu_btn__bar, l.$style["menu_btn__bar--top"]]
            }), l._v(" "), c("i", {
                class: [l.$style.menu_btn__bar, l.$style["menu_btn__bar--middle"]]
            }), l._v(" "), c("i", {
                class: [l.$style.menu_btn__bar, l.$style["menu_btn__bar--bottom"]]
            })])]), l._v(" "), c("nav", {
                class: [l.$style.menu, (t = {},
                t[l.$style["menu--visible"]] = l.visibleMenu,
                t)]
            }, [c("ul", {
                class: l.$style.menu__list
            }, [c("li", {
                class: l.$style.menu__item
            }, [c("nuxt-link", {
                class: l.$style.menu__link,
                attrs: {
                    to: l.localePath("/"),
                    exact: ""
                }
            }, [l._v("\n          Introduction\n        ")])], 1), l._v(" "), c("li", {
                class: l.$style.menu__item
            }, [c("nuxt-link", {
                class: l.$style.menu__link,
                attrs: {
                    to: l.localePath("/virtualgallery" + l.$route.hash),
                    exact: ""
                }
            }, [l._v("\n          Virtual Gallery\n        ")])], 1), l._v(" "), c("li", {
                class: l.$style.menu__item
            }, [c("nuxt-link", {
                class: l.$style.menu__link,
                attrs: {
                    to: l.localePath("/virtualgallery/all-projects/")
                }
            }, [l._v("\n          All Projects\n        ")])], 1), l._v(" "), c("li", {
                class: [l.$style.menu__item, l.$style["menu__item--switch"]]
            }, [c("div", {
                class: l.$style.menu__item__title
            }, [l._v("Sound")]), l._v(" "), c("button", {
                class: l.$style.menu__link,
                attrs: {
                    type: "button",
                    disabled: l.isPlaying
                },
                on: {
                    click: l.playBGM
                }
            }, [l._v("\n          ON\n        ")]), l._v("\n        /\n        "), c("button", {
                class: l.$style.menu__link,
                attrs: {
                    type: "button",
                    disabled: !l.isPlaying
                },
                on: {
                    click: l.pauseBGM
                }
            }, [l._v("\n          OFF\n        ")])]), l._v(" "), c("li", {
                class: [l.$style.menu__item, l.$style["menu__item--switch"]]
            }, [c("div", {
                class: l.$style.menu__item__title
            }, [l._v("Language")]), l._v(" "), c("button", {
                class: l.$style.menu__link,
                attrs: {
                    type: "button",
                    disabled: "ja" === l.i18n.locale
                },
                on: {
                    click: function(e) {
                        return l.$i18n.setLocale("ja")
                    }
                }
            }, [l._v("\n          JP\n        ")]), l._v("\n        /\n        "), c("button", {
                class: l.$style.menu__link,
                attrs: {
                    type: "button",
                    disabled: "en" === l.i18n.locale
                },
                on: {
                    click: function(e) {
                        return l.$i18n.setLocale("en")
                    }
                }
            }, [l._v("\n          EN\n        ")])])])]), l._v(" "), c("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [c("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: l.phase === l.Phase.done,
                    expression: "phase === Phase.done"
                }],
                ref: "main",
                class: l.$style.main
            }, [c("Nuxt")], 1)]), l._v(" "), c("transition", {
                attrs: {
                    name: "fade"
                }
            }, [l.phase !== l.Phase.done ? c("div", {
                class: [l.$style.fill, l.$style.init]
            }, [c("project-foil", {
                class: [l.$style.logo, l.$style.logo1],
                attrs: {
                    animate: ""
                }
            }), l._v(" "), c("ambient-weaving-logo", {
                class: [l.$style.logo, l.$style.logo2]
            }), l._v(" "), c("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [l.phase === l.Phase.loading ? c("div", {
                key: "loading",
                class: l.$style.loading,
                attrs: {
                    role: "progressbar",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                }
            }, [c("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "20.17699115044248 20.17699115044248 40.35398230088496 40.35398230088496"
                }
            }, [c("circle", {
                attrs: {
                    cx: "40.35398230088496",
                    cy: "40.35398230088496",
                    r: "20"
                }
            })])]) : l.phase === l.Phase.setup ? c("div", {
                key: "setup",
                class: l.$style.fill__content
            }, [c("v-html", {
                class: l.$style.init__msg,
                attrs: {
                    tag: "p",
                    content: l.i18n.t("setup.description")
                }
            }), l._v(" "), c("primary-button", {
                class: [l.$style.init__button, l.$style["init__button--on"]],
                nativeOn: {
                    click: function(e) {
                        return e.preventDefault(),
                        l.initialize(!0)
                    }
                }
            }, [l._v("\n            Sound ON\n          ")]), l._v(" "), c("primary-button", {
                class: [l.$style.init__button, l.$style["init__button--off"]],
                nativeOn: {
                    click: function(e) {
                        return e.preventDefault(),
                        l.initialize(!1)
                    }
                }
            }, [l._v("\n            Sound OFF\n          ")])], 1) : l._e()])], 1) : l._e()]), l._v(" "), c("portal-target", {
                attrs: {
                    name: "append",
                    slim: ""
                }
            }), l._v(" "), c("transition", {
                attrs: {
                    name: "fade"
                }
            }, [l.isLandscape ? c("div", {
                class: [l.$style.fill, l.$style.landscape]
            }, [c("project-foil", {
                class: [l.$style.logo, l.$style.logo1]
            }), l._v(" "), c("ambient-weaving-logo", {
                class: [l.$style.logo, l.$style.logo2]
            }), l._v(" "), c("div", {
                class: l.$style.fill__content
            }, [c("img", {
                class: l.$style.landscape__content_img,
                attrs: {
                    src: n(187),
                    width: "172",
                    height: "110",
                    alg: "デバイスの向きを縦向きにする"
                }
            }), l._v(" "), c("v-html", {
                attrs: {
                    content: l.i18n.t("landscape.description")
                }
            })], 1)], 1) : l._e()]), l._v(" "), c("i", {
                ref: "cursor",
                class: [l.$style.cursor, (o = {},
                o[l.$style["cursor--hover"]] = l.cursorHover,
                o[l.$style["cursor--visible"]] = l.hasMouseEvent && "youtube" !== l.isFullscreen,
                o)]
            })], 1)
        }
        ), [], !1, (function(e) {
            this.$style = d.default.locals || d.default
        }
        ), null, null);
        t.a = component.exports;
        installComponents(component, {
            ProjectFoil: n(149).default,
            AmbientWeavingLogo: n(148).default,
            VHtml: n(147).default,
            PrimaryButton: n(146).default
        })
    },
    145: function(e, t, n) {
        "use strict";
        var o = n(19)
          , component = Object(o.a)({}, (function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", [t("Nuxt")], 1)
        }
        ), [], !1, null, null, null);
        t.a = component.exports
    },
    146: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(2)
          , l = Object(o.b)({
            props: {
                to: {
                    type: String,
                    default: ""
                }
            },
            setup(e) {
                const rect = Object(o.j)()
                  , t = Object(o.j)(!1);
                let n = 0
                  , l = 0
                  , r = 0;
                const c = () => {
                    const e = rect.value;
                    if (e) {
                        const t = e.getBoundingClientRect();
                        n = 2 * (t.width + t.height),
                        e.style.strokeDasharray = "".concat(n, "px"),
                        e.style.strokeDashoffset = "".concat(n, "px")
                    }
                }
                  , animate = e => {
                    l = requestAnimationFrame(animate);
                    const progress = (e - r) / 15e3;
                    rect.value && (rect.value.style.strokeDashoffset = "".concat(n * (-2 * (progress - .5)), "px")),
                    progress >= 1 && (r = e)
                }
                  , d = () => {
                    cancelAnimationFrame(l)
                }
                ;
                return Object(o.f)(( () => {
                    c(),
                    window.addEventListener("resize", c, {
                        passive: !0
                    })
                }
                )),
                Object(o.g)(( () => {
                    window.removeEventListener("resize", c),
                    d()
                }
                )),
                {
                    visible: t,
                    rect: rect,
                    tag: Object(o.a)(( () => e.to ? "nuxt-link" : "button")),
                    attrs: Object(o.a)(( () => e.to ? {
                        to: e.to
                    } : {
                        type: "button"
                    })),
                    onChangeIntersection(e) {
                        let {isIntersecting: n} = e;
                        t.value = n,
                        n ? l = requestAnimationFrame((e => {
                            r = e - 15e3 * Math.random(),
                            animate(e)
                        }
                        )) : d()
                    }
                }
            }
        })
          , r = n(101)
          , c = n(19);
        var component = Object(c.a)(l, (function() {
            var e, t = this, n = t.$createElement, o = t._self._c || n;
            return o(t.tag, t._g(t._b({
                directives: [{
                    name: "iobs",
                    rawName: "v-iobs"
                }],
                tag: "component",
                class: [t.$style.root, (e = {},
                e[t.$style.visible] = t.visible,
                e)],
                on: {
                    change: t.onChangeIntersection
                }
            }, "component", t.attrs, !1), t.$listeners), [o("svg", {
                class: t.$style.svg,
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg"
                }
            }, [o("rect", {
                ref: "rect",
                class: t.$style.rect,
                attrs: {
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%"
                }
            })]), t._v(" "), t._t("default")], 2)
        }
        ), [], !1, (function(e) {
            this.$style = r.default.locals || r.default
        }
        ), null, null);
        t.default = component.exports
    },
    147: function(e, t, n) {
        "use strict";
        n.r(t);
        n(27);
        var o = n(2)
          , l = Object(o.b)({
            props: {
                tag: {
                    type: String,
                    default: "span"
                },
                content: {
                    type: String,
                    required: !0
                },
                tobr: {
                    type: Boolean,
                    default: !0
                }
            },
            setup: e => ({
                _content: Object(o.a)(( () => e.tobr ? e.content.replace(/\n/g, "<br>") : e.content))
            })
        })
          , r = n(19)
          , component = Object(r.a)(l, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)(e.tag, {
                tag: "component",
                domProps: {
                    innerHTML: e._s(e._content)
                }
            })
        }
        ), [], !1, null, null, null);
        t.default = component.exports
    },
    148: function(e, t, n) {
        "use strict";
        n.r(t);
        n(11);
        var o = n(2)
          , l = Object(o.b)({
            props: {
                delay: {
                    type: Number,
                    default: 100
                },
                type: {
                    type: String,
                    default: "from-right"
                }
            },
            setup: e => ({
                pathStyles: [...Array(14)].map(( (t, n) => ({
                    transitionDelay: "".concat(.1 * n + e.delay / 1e3, "s")
                })))
            })
        })
          , r = n(100)
          , c = n(19);
        var component = Object(c.a)(l, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                directives: [{
                    name: "iobs",
                    rawName: "v-iobs.once",
                    value: {
                        className: {
                            enter: "logo--enter"
                        }
                    },
                    expression: "{ className: { enter: 'logo--enter' } }",
                    modifiers: {
                        once: !0
                    }
                }],
                class: e.$style.logoContainer,
                attrs: {
                    "data-type": e.type
                }
            }, ["from-right" === e.type ? n("svg", {
                attrs: {
                    width: "188",
                    height: "138",
                    viewBox: "0 0 188 138",
                    fill: "none"
                }
            }, [n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M28.2196 43.3111C29.453 47.0114 30.3864 49.0116 32.2033 49.695V50.1451C30.6365 50.0951 28.5196 49.8784 27.2695 49.8784C25.0859 49.8784 23.2858 49.9784 21.0189 50.1451V49.6784C23.5191 49.0283 24.5025 47.8948 24.5025 45.9113C24.5025 44.3612 24.0858 42.711 21.7189 34.6269H8.63432L7.10083 40.4775C6.65079 42.1776 6.41743 43.5778 6.41743 44.7445C6.41743 47.6115 7.85091 49.0116 11.0346 49.695V50.1784C9.25104 49.9951 7.58421 49.9117 5.95072 49.9117C4.85061 49.9117 2.90042 50.0617 1.91699 50.1951V49.795C3.75051 47.6615 4.73393 46.2113 6.25075 40.4441L15.6683 4.87396H16.5184C18.502 11.3246 23.3358 28.3929 28.2029 43.3111H28.2196ZM14.9683 10.4078L8.83434 33.8435H21.4856C20.0021 28.8096 17.8186 21.4589 14.5682 10.4078H14.9516H14.9683Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[1],
                attrs: {
                    d: "M34.237 49.6618C37.1206 49.0284 37.8706 47.9616 37.8706 44.5779V23.0592C37.8706 20.4422 36.9372 19.0754 35.1537 19.0754C34.9037 19.0754 34.6703 19.0754 34.2036 19.1755V18.6921C36.4538 17.7753 38.8374 16.4585 40.3042 15.6084H41.171L41.221 19.4755C42.6211 17.7086 44.0712 15.9918 46.8882 15.5584C47.2049 15.5084 47.4716 15.5084 47.7716 15.5084C50.1885 15.5084 52.0554 17.0586 52.6721 19.4255C54.0556 17.6753 55.5057 15.9918 58.2726 15.5584C58.5893 15.5084 58.856 15.5084 59.1561 15.5084C62.6564 15.5084 64.4399 17.6086 64.4399 21.709V44.5946C64.4399 48.245 65.64 49.0784 68.2236 49.6784V50.1452C66.3401 50.0951 64.4399 49.8785 62.8231 49.8785C61.1062 49.8785 59.0561 50.0951 57.2725 50.1285V49.6618C60.1562 49.0284 60.9062 47.9616 60.9062 44.5779V23.4259C60.9062 20.1422 59.5561 17.3253 57.2559 17.3253C56.0224 17.3253 54.5223 18.1253 52.8054 20.1089C52.8888 20.6089 52.9388 20.9423 52.9388 21.709L53.0888 44.5946C53.0888 48.245 54.2389 49.0784 56.8225 49.6784V50.1452C54.939 50.0951 53.0388 49.8785 51.422 49.8785C49.7051 49.8785 47.6549 50.0951 45.8714 50.1285V49.6618C48.755 49.0284 49.5051 47.9616 49.5051 44.5779V23.4259C49.5051 20.1089 48.1717 17.3253 45.8881 17.3253C44.6213 17.3253 43.0711 18.1587 41.3043 20.2256L41.5043 44.5946C41.5543 47.9616 42.3877 49.045 45.188 49.6784V50.1452C43.3045 50.0951 41.4043 49.8785 39.7875 49.8785C38.0707 49.8785 36.0205 50.0951 34.237 50.1285V49.6618Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[2],
                attrs: {
                    d: "M73.3405 50.6284L73.1905 10.0578C73.1739 4.59058 72.4738 3.55714 71.1403 3.55714C70.6736 3.55714 70.1236 3.69049 69.5068 3.7905V3.29045C71.7904 2.69039 74.3406 1.50694 75.7741 0.65686L76.7575 0.923553V18.5086C77.491 17.6585 78.3577 16.9751 79.3911 16.4251C80.5913 15.7917 82.0081 15.4916 83.5082 15.4916C89.0588 15.4916 92.0257 21.1589 92.0257 31.7266C92.0257 40.8275 89.8755 50.3784 82.8581 50.3784C80.1245 50.3784 78.0243 47.6615 76.5575 47.6615C75.0907 47.6615 74.324 49.2116 73.9406 50.6284H73.3405ZM85.3584 49.2283C88.1253 47.9615 89.5755 44.0278 89.5755 37.6105C89.5755 28.2762 85.7084 16.7918 80.958 16.7918C78.141 16.7918 77.3743 19.8087 76.7742 23.7091V40.4274C76.7742 44.5612 80.0745 49.595 83.6916 49.595C84.2416 49.595 84.8083 49.4783 85.3584 49.2116V49.2283Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[3],
                attrs: {
                    d: "M95.7264 49.6617C98.61 49.0283 99.3767 47.9615 99.3601 44.5778L99.2101 23.059C99.1934 20.2088 98.1433 19.1753 95.5264 19.2253V18.792C97.7933 17.8752 100.344 16.4917 101.794 15.6417L102.777 15.9083L102.977 44.5778C102.994 47.9282 103.844 49.0116 106.661 49.6617V50.1284C104.777 50.0784 102.877 49.8617 101.26 49.8617C99.5434 49.8617 97.4932 50.0784 95.7097 50.1117V49.645L95.7264 49.6617ZM97.6432 10.0078C97.6432 8.27426 98.6433 7.29083 100.36 7.29083C102.077 7.29083 103.077 8.27426 103.077 10.0078C103.077 11.7413 102.077 12.7247 100.36 12.7247C98.6433 12.7247 97.6432 11.7413 97.6432 10.0078Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[4],
                attrs: {
                    d: "M119.629 50.6285C113.545 50.6285 110.461 45.628 110.461 35.8604C110.461 26.0928 113.845 15.3917 121.995 15.3917C124.612 15.3917 126.279 17.892 126.279 21.7924C126.279 23.5425 125.912 25.4427 125.262 27.2596C123.596 31.61 122.262 31.6767 118.178 31.7267C117.328 31.7267 116.312 31.7267 115.161 31.7767C113.828 31.8267 113.745 31.91 113.745 32.7268C113.845 40.8109 115.961 49.4617 120.045 49.4617C123.012 49.4617 125.412 47.3949 126.629 43.6778L127.196 43.9612C125.862 48.0783 123.012 50.6118 119.645 50.6118L119.629 50.6285ZM123.129 25.6261C123.129 19.6921 122.012 16.7085 119.695 16.7085C115.561 16.7085 113.745 24.1926 113.745 30.9766C113.745 31.0099 113.745 31.0266 113.795 31.0266C122.979 30.8766 123.129 31.66 123.129 25.6261Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[5],
                attrs: {
                    d: "M129.463 49.6617C132.346 49.0283 133.096 47.9616 133.096 44.5779V23.0591C133.096 20.4589 132.163 19.0921 130.279 19.0921C130.013 19.0921 129.729 19.1254 129.413 19.1754V18.692C131.663 17.7753 134.046 16.4585 135.513 15.6084H136.38L136.43 19.4921C138.113 17.4752 140.53 15.4917 143.931 15.4917C147.331 15.4917 149.081 17.7253 149.081 21.7256V44.6112C149.081 47.9449 149.931 49.045 152.765 49.6951V50.1618C150.881 50.1118 148.981 49.8951 147.364 49.8951C145.648 49.8951 143.597 50.1118 141.814 50.1451V49.6784C144.697 49.045 145.448 47.9782 145.448 44.5946V23.4258C145.448 19.9421 143.664 17.3752 141.28 17.3752C139.764 17.3752 138.113 18.3753 136.53 20.2255L136.73 44.5946C136.78 47.9615 137.613 49.045 140.414 49.6784V50.1451C138.53 50.0951 136.63 49.8784 135.013 49.8784C133.296 49.8784 131.246 50.0951 129.463 50.1284V49.6617Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[6],
                attrs: {
                    d: "M162.082 50.6284C159.482 50.6284 157.949 48.6782 157.949 45.3946V17.3752H155.032V16.4918C158.465 16.025 159.966 15.725 160.966 10.9745H161.382V16.3084L166.266 16.2084V17.4752L161.382 17.3752V44.7279C161.382 47.5615 162.216 49.0116 163.799 49.0116C164.566 49.0116 165.883 48.8616 166.633 46.278L167.166 46.4614C166.333 49.2616 164.616 50.6284 162.082 50.6284Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[7],
                attrs: {
                    d: "M14.8348 125.603H14.2181L4.65046 87.6488C3.58368 83.4151 2.31689 82.3483 0 81.1648V80.7315C1.61683 80.7815 3.33366 80.9481 4.68379 80.9481C6.91734 80.9481 9.40092 80.7315 11.6845 80.6981V81.2148C9.26758 81.9149 8.1508 83.1817 8.1508 85.3986C8.1508 86.0653 8.25081 86.8154 8.45083 87.6655L15.6515 118.385C15.6515 118.235 15.3515 118.235 15.3515 118.385L23.1689 80.9481C23.1689 80.6648 23.5023 80.5814 23.6523 80.8981L33.9867 118.385C33.9867 118.385 33.7033 118.352 33.7033 118.435L38.6871 94.4328C39.0872 92.5326 39.2372 90.8824 39.2372 89.4823C39.2372 84.7318 37.3203 81.7149 33.9533 81.2315V80.6981C35.9369 80.8148 37.337 80.9148 39.1872 80.9148C40.0373 80.9148 42.3708 80.9148 43.5209 80.7981V81.3148C42.5375 82.1983 41.1874 86.0153 40.3373 90.2324C39.0705 96.4997 37.2036 106.467 33.1532 125.519H32.5865L22.2855 89.1323L14.8015 125.619L14.8348 125.603Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[8],
                attrs: {
                    d: "M54.7555 125.853C48.6715 125.853 45.5879 120.852 45.5879 111.084C45.5879 101.317 48.9716 90.6157 57.1224 90.6157C59.7393 90.6157 61.4061 93.116 61.4061 97.0164C61.4061 98.7665 61.0394 100.667 60.3893 102.484C58.7225 106.834 57.389 106.901 53.3053 106.951C52.4552 106.951 51.4385 106.951 50.2884 107.001C48.9549 107.051 48.8715 107.134 48.8715 107.951C48.9716 116.035 51.0884 124.686 55.1722 124.686C58.1391 124.686 60.5394 122.619 61.7561 118.902L62.3229 119.185C60.9894 123.302 58.1391 125.836 54.7721 125.836L54.7555 125.853ZM58.2558 100.85C58.2558 94.9161 57.139 91.9325 54.8221 91.9325C50.6884 91.9325 48.8715 99.4166 48.8715 106.201C48.8715 106.234 48.8715 106.251 48.9216 106.251C58.1058 106.101 58.2558 106.884 58.2558 100.85Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[9],
                attrs: {
                    d: "M70.9403 125.852C68.1733 125.852 66.1064 123.452 66.1064 120.252C66.1064 114.285 69.6235 109.734 76.8908 106.217V101.55C76.8908 95.6828 75.7907 92.1658 74.0406 92.1658C72.0904 92.1658 70.3902 94.9494 70.3902 98.0831C70.3902 100.133 70.7236 101.133 71.4903 101.133C71.6237 101.133 71.757 101.1 71.907 101.05L72.0404 101.567C71.4236 102.117 70.6569 102.4 69.8902 102.4C68.2233 102.4 67.0899 101.15 67.0899 99.3332C67.0899 95.2328 71.9237 90.899 76.4575 90.899C79.1077 90.899 80.4412 92.6659 80.4412 96.1496V121.702C80.4412 123.069 81.2579 124.019 82.408 124.019C83.5582 124.019 84.5583 123.086 85.0083 121.469L85.475 121.702C84.7583 124.319 83.1915 125.836 81.2079 125.836C79.041 125.836 77.5742 124.786 77.1075 122.936C75.5407 124.902 73.5238 125.836 70.9736 125.836L70.9403 125.852ZM76.9242 122.169C76.8908 121.935 76.8908 121.685 76.8908 121.469V106.984C72.1737 109.351 69.5901 113.251 69.5901 117.802C69.5901 121.369 71.1903 123.952 73.3738 123.952C74.8073 123.952 75.9574 123.369 76.9408 122.185L76.9242 122.169Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[10],
                attrs: {
                    d: "M97.3593 125.352H96.7426V125.136L89.0918 98.2498C87.9084 94.0494 87.275 93.216 84.6914 91.9659V91.5325C86.2249 91.5325 87.725 91.7325 89.0252 91.7325C90.942 91.7325 93.1422 91.5658 95.1758 91.5325V92.0159C93.1756 92.3492 92.1921 93.4493 92.1921 95.4162C92.1921 96.1829 92.3422 97.0997 92.6422 98.1331L98.3761 118.352L103.243 98.2831C103.443 97.4164 103.56 96.6496 103.56 95.9662C103.56 93.766 102.476 92.4826 100.276 91.9825V91.5158C102.06 91.5658 103.81 91.7825 105.31 91.7825C106.26 91.7825 107.344 91.5491 108.377 91.5158V91.9825C105.71 92.7993 104.643 96.2663 104.093 98.4832L97.3426 125.352H97.3593Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[11],
                attrs: {
                    d: "M109.961 124.886C112.845 124.252 113.612 123.185 113.595 119.802L113.445 98.283C113.428 95.4328 112.378 94.3993 109.761 94.4493V94.016C112.028 93.0992 114.578 91.7157 116.029 90.8657L117.012 91.1323L117.212 119.802C117.229 123.152 118.079 124.236 120.896 124.886V125.352C119.012 125.302 117.112 125.086 115.495 125.086C113.778 125.086 111.728 125.302 109.945 125.336V124.869L109.961 124.886ZM111.878 85.2318C111.878 83.4983 112.878 82.5148 114.595 82.5148C116.312 82.5148 117.312 83.4983 117.312 85.2318C117.312 86.9653 116.312 87.9487 114.595 87.9487C112.878 87.9487 111.878 86.9653 111.878 85.2318Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[12],
                attrs: {
                    d: "M123.329 124.886C126.212 124.252 126.963 123.186 126.963 119.802V98.2831C126.963 95.6829 126.029 94.3161 124.146 94.3161C123.879 94.3161 123.596 94.3494 123.279 94.3994V93.916C125.529 92.9993 127.913 91.6825 129.379 90.8324H130.246L130.296 94.7161C131.98 92.6992 134.397 90.7157 137.797 90.7157C141.197 90.7157 142.947 92.9492 142.947 96.9496V119.835C142.947 123.169 143.797 124.269 146.631 124.919V125.386C144.748 125.336 142.847 125.119 141.231 125.119C139.514 125.119 137.464 125.336 135.68 125.369V124.902C138.564 124.269 139.314 123.202 139.314 119.819V98.6498C139.314 95.1661 137.53 92.5992 135.147 92.5992C133.63 92.5992 131.98 93.5993 130.396 95.4495L130.596 119.819C130.646 123.186 131.48 124.269 134.28 124.902V125.369C132.396 125.319 130.496 125.102 128.879 125.102C127.163 125.102 125.112 125.319 123.329 125.352V124.886Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[13],
                attrs: {
                    d: "M158.265 137.387C152.631 137.387 149.798 134.087 149.798 130.786C149.798 128.403 151.215 126.319 153.632 125.102C152.015 124.402 151.115 123.352 150.665 121.669C150.548 121.269 150.498 120.852 150.498 120.452C150.498 117.918 152.498 115.535 154.665 114.718C152.031 112.901 150.698 108.867 150.698 102.834C150.698 94.8661 153.232 90.8324 158.265 90.8324C159.365 90.8324 160.316 91.1157 161.699 91.8825C163.849 91.8325 165.633 88.2654 166.533 87.3654C167.066 86.8486 168 89.2655 168 90.449C168 91.7991 166.433 92.5659 163.766 92.5659C163.416 92.5659 163.066 92.5659 162.682 92.5325C164.666 94.2494 165.783 97.9664 165.783 102.767C165.783 111.534 163.366 115.718 158.215 115.718C157.182 115.718 156.198 115.518 155.465 115.135C153.182 115.785 151.431 117.802 151.431 119.619C151.431 119.935 151.481 120.235 151.598 120.535C152.081 121.835 152.948 122.185 154.248 122.185C155.815 122.185 158.032 121.652 160.999 121.652C162.832 121.652 163.883 121.902 164.983 122.585C166.583 123.569 167.45 126.002 167.45 129.353C167.45 134.253 163.866 137.37 158.282 137.37L158.265 137.387ZM166.583 129.62C166.583 127.436 165.766 125.819 164.233 125.219C163.716 124.969 162.582 124.802 160.932 124.802C159.282 124.802 157.249 124.952 154.765 125.319C153.565 125.486 152.865 126.803 152.865 129.053C152.865 132.436 154.515 136.77 158.365 136.77C163.299 136.77 166.583 133.887 166.583 129.62ZM159.949 114.851C161.799 114.585 162.699 112.568 162.699 108.451C162.699 106.851 162.549 104.484 162.249 102.283C161.366 95.6328 159.315 91.6491 156.882 91.6491C154.848 91.6491 153.882 93.6826 153.882 97.9164C153.882 104.3 155.815 115.385 159.949 114.851Z",
                    fill: "white"
                }
            })]) : e._e(), e._v(" "), "from-bottom" === e.type ? n("svg", {
                attrs: {
                    width: "487",
                    height: "127",
                    viewBox: "0 0 487 127",
                    fill: "none"
                }
            }, [n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M36.7468 60.6194C38.4685 65.803 39.7758 68.5782 42.3265 69.5352V70.1572C40.1265 70.0775 37.1772 69.7904 35.4236 69.7904C32.3786 69.7904 29.8598 69.9339 26.6873 70.1572V69.5033C30.1946 68.5942 31.5496 67.0152 31.5496 64.224C31.5496 62.0548 30.9757 59.7422 27.6598 48.4339H9.39008L7.25384 56.616C6.63209 58.9925 6.29731 60.9543 6.29731 62.5812C6.29731 66.5845 8.29008 68.5463 12.7539 69.5033V70.1891C10.251 69.9339 7.93935 69.8063 5.64368 69.8063C4.0973 69.8063 1.37119 70.0137 0.0161133 70.2051V69.6309C2.5828 66.6483 3.96976 64.6227 6.09006 56.5523L19.2264 6.86938H20.422C23.196 15.8809 29.9395 39.7574 36.7468 60.6194ZM18.238 14.6209L9.6611 47.3972H27.3569C25.2844 40.3635 22.2235 30.076 17.6959 14.6209H18.238Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[1],
                attrs: {
                    d: "M45.1642 69.5033C49.1816 68.6101 50.2338 67.1428 50.2338 62.4057V32.3089C50.2338 28.6405 48.9265 26.7425 46.4236 26.7425C46.0729 26.7425 45.754 26.7425 45.0845 26.8701V26.2003C48.241 24.9243 51.5729 23.0741 53.5976 21.8779H54.7932L54.857 27.2848C56.8019 24.8126 58.8425 22.4202 62.7802 21.8141C63.2266 21.7344 63.5933 21.7344 64.0237 21.7344C67.3875 21.7344 70.018 23.8876 70.8629 27.221C72.7919 24.7807 74.8165 22.4202 78.7064 21.8141C79.1528 21.7344 79.5195 21.7344 79.9499 21.7344C84.8441 21.7344 87.347 24.6691 87.347 30.395V62.3898C87.347 67.4937 89.021 68.658 92.6239 69.5033V70.1572C89.9934 70.0775 87.3311 69.7904 85.0833 69.7904C82.676 69.7904 79.8064 70.0934 77.3354 70.1572V69.5033C81.3528 68.6101 82.405 67.1428 82.405 62.4057V32.8034C82.405 28.2099 80.5079 24.2704 77.2876 24.2704C75.5658 24.2704 73.4615 25.4028 71.0861 28.162C71.2136 28.8638 71.2774 29.3264 71.2774 30.4109L71.4846 62.4057C71.4846 67.5096 73.0788 68.6739 76.6977 69.5192V70.1732C74.0673 70.0934 71.4049 69.8063 69.1571 69.8063C66.7498 69.8063 63.8802 70.1094 61.4092 70.1732V69.5192C65.4266 68.6261 66.4788 67.1587 66.4788 62.4217V32.8034C66.4788 28.162 64.6136 24.2704 61.4092 24.2704C59.6396 24.2704 57.4715 25.4506 55.0005 28.3215L55.2874 62.3898C55.3512 67.0949 56.515 68.6101 60.4367 69.5033V70.1572C57.8063 70.0775 55.144 69.7904 52.8961 69.7904C50.4889 69.7904 47.6193 70.0934 45.1482 70.1413V69.4873L45.1642 69.5033Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[2],
                attrs: {
                    d: "M99.8297 70.859L99.6225 14.1264C99.5906 6.48661 98.6181 5.05115 96.7529 5.05115C96.0992 5.05115 95.35 5.22659 94.4731 5.37014V4.66836C97.6616 3.83898 101.217 2.18023 103.241 0.984009L104.612 1.35085V25.9451C105.633 24.7648 106.844 23.7919 108.279 23.0422C109.969 22.165 111.93 21.7344 114.05 21.7344C121.814 21.7344 125.959 29.6613 125.959 44.4306C125.959 57.1424 122.946 70.5081 113.141 70.5081C109.315 70.5081 106.382 66.6962 104.341 66.6962C102.301 66.6962 101.217 68.8494 100.675 70.859H99.8297ZM116.617 68.9132C120.491 67.1428 122.515 61.6402 122.515 52.6765C122.515 39.6138 117.095 23.5686 110.463 23.5686C106.525 23.5686 105.457 27.7793 104.612 33.25V56.632C104.612 62.4057 109.236 69.4554 114.273 69.4554C115.054 69.4554 115.836 69.296 116.617 68.9291V68.9132Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[3],
                attrs: {
                    d: "M131.124 69.5033C135.173 68.6102 136.225 67.1109 136.193 62.4058L135.986 32.309C135.954 28.3216 134.504 26.8702 130.837 26.9499V26.3279C134.009 25.036 137.58 23.1061 139.605 21.9099L140.976 22.2767L141.263 62.3739C141.295 67.0471 142.475 68.5783 146.412 69.4874V70.1413C143.782 70.0616 141.12 69.7745 138.872 69.7745C136.464 69.7745 133.595 70.0775 131.124 70.1254V69.4714V69.5033ZM133.802 14.0627C133.802 11.6383 135.189 10.2507 137.612 10.2507C140.036 10.2507 141.422 11.6383 141.422 14.0627C141.422 16.487 140.036 17.8746 137.612 17.8746C135.189 17.8746 133.802 16.487 133.802 14.0627Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[4],
                attrs: {
                    d: "M164.523 70.859C156.025 70.859 151.705 63.8731 151.705 50.2043C151.705 36.5356 156.424 21.5908 167.838 21.5908C171.505 21.5908 173.833 25.0838 173.833 30.5385C173.833 32.9948 173.323 35.6424 172.398 38.1784C170.07 44.2711 168.205 44.3508 162.482 44.4146C161.286 44.4146 159.883 44.4146 158.257 44.4784C156.392 44.5422 156.28 44.6539 156.28 45.8182C156.424 57.1264 159.389 69.2162 165.081 69.2162C169.241 69.2162 172.573 66.3293 174.279 61.1298L175.06 61.5285C173.195 67.2863 169.21 70.8271 164.507 70.8271L164.523 70.859ZM169.417 35.8976C169.417 27.5879 167.87 23.425 164.634 23.425C158.863 23.425 156.328 33.8879 156.328 43.362C156.328 43.4098 156.344 43.4258 156.392 43.4258C169.225 43.2025 169.433 44.303 169.433 35.8816L169.417 35.8976Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[5],
                attrs: {
                    d: "M178.281 69.5033C182.298 68.6102 183.35 67.1428 183.35 62.4058V32.309C183.35 28.6725 182.059 26.7585 179.412 26.7585C179.046 26.7585 178.631 26.7904 178.217 26.8702V26.2003C181.373 24.9243 184.705 23.0742 186.73 21.878H187.926L187.989 27.3008C190.349 24.4937 193.728 21.7025 198.479 21.7025C203.23 21.7025 205.685 24.8286 205.685 30.411V62.4058C205.685 67.0631 206.865 68.6102 210.834 69.5193V70.1732C208.204 70.0935 205.542 69.8064 203.294 69.8064C200.886 69.8064 198.017 70.1094 195.546 70.1732V69.5193C199.563 68.6261 200.615 67.1587 200.615 62.4217V32.8034C200.615 27.9388 198.129 24.3501 194.797 24.3501C192.676 24.3501 190.381 25.7378 188.149 28.3216L188.436 62.3898C188.499 67.095 189.663 68.6102 193.585 69.5033V70.1573C190.955 70.0775 188.292 69.7904 186.044 69.7904C183.637 69.7904 180.768 70.0935 178.297 70.1413V69.4874L178.281 69.5033Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[6],
                attrs: {
                    d: "M223.859 70.8591C220.224 70.8591 218.088 68.1157 218.088 63.5382V24.3502H214.007V23.1221C218.789 22.4681 220.91 22.0375 222.297 15.4025H222.871V22.8669L229.71 22.7233V24.4937L222.871 24.3502V62.6132C222.871 66.5686 224.034 68.6102 226.25 68.6102C227.318 68.6102 229.168 68.4028 230.22 64.7982L230.969 65.0534C229.821 68.9611 227.414 70.875 223.859 70.875V70.8591Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[7],
                attrs: {
                    d: "M272.929 70.5081H272.053L258.693 17.4439C257.21 11.5107 255.441 10.0274 252.205 8.38457V7.77849C254.468 7.85824 256.86 8.06558 258.757 8.06558C261.866 8.06558 265.357 7.76254 268.545 7.71469V8.43242C265.181 9.40535 263.603 11.1917 263.603 14.2859C263.603 15.2269 263.747 16.2796 264.034 17.4599L274.109 60.412C274.109 60.2047 273.695 60.2047 273.695 60.412L284.615 8.04963C284.615 7.66684 285.077 7.53925 285.3 7.98584L299.744 60.412C299.696 60.3004 299.345 60.3642 299.345 60.4918L306.328 26.918C306.886 24.2544 307.093 21.9576 307.093 19.9959C307.093 13.3608 304.415 9.11825 299.696 8.46432V7.71469C302.454 7.87419 304.431 8.01773 307.014 8.01773C308.209 8.01773 311.477 8.01773 313.072 7.84229V8.56002C311.701 9.78813 309.803 15.1312 308.624 21.0326C306.854 29.7889 304.24 43.7288 298.58 70.3805H297.783L283.387 19.4855L272.945 70.5081H272.929Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[8],
                attrs: {
                    d: "M328.727 70.859C320.229 70.859 315.909 63.8731 315.909 50.2043C315.909 36.5356 320.628 21.5908 332.043 21.5908C335.709 21.5908 338.037 25.0838 338.037 30.5385C338.037 32.9948 337.527 35.6424 336.602 38.1784C334.274 44.2711 332.409 44.3508 326.686 44.4146C325.49 44.4146 324.087 44.4146 322.461 44.4784C320.596 44.5422 320.485 44.6539 320.485 45.8182C320.628 57.1264 323.593 69.2162 329.285 69.2162C333.446 69.2162 336.777 66.3293 338.483 61.1298L339.264 61.5285C337.399 67.2863 333.414 70.8271 328.711 70.8271L328.727 70.859ZM333.621 35.8976C333.621 27.5879 332.074 23.425 328.838 23.425C323.067 23.425 320.532 33.8879 320.532 43.362C320.532 43.4098 320.548 43.4258 320.596 43.4258C333.43 43.2025 333.637 44.303 333.637 35.8816L333.621 35.8976Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[9],
                attrs: {
                    d: "M351.364 70.8591C347.49 70.8591 344.605 67.5097 344.605 63.0438C344.605 54.6863 349.515 48.3383 359.686 43.4099V36.8865C359.686 28.6885 358.156 23.7601 355.701 23.7601C352.959 23.7601 350.599 27.6518 350.599 32.0219C350.599 34.8929 351.062 36.2964 352.13 36.2964C352.305 36.2964 352.496 36.2645 352.704 36.1848L352.879 36.9184C352.018 37.684 350.934 38.0828 349.866 38.0828C347.538 38.0828 345.944 36.3283 345.944 33.7923C345.944 28.0664 352.688 22.0056 359.049 22.0056C362.763 22.0056 364.612 24.4618 364.612 29.3584V65.0854C364.612 66.9993 365.744 68.3231 367.354 68.3231C368.965 68.3231 370.352 67.0153 370.989 64.7504L371.643 65.0694C370.654 68.7378 368.454 70.8591 365.68 70.8591C362.651 70.8591 360.595 69.3917 359.957 66.8079C357.757 69.5512 354.951 70.8591 351.38 70.8591H351.364ZM359.734 65.7074C359.686 65.3725 359.686 65.0375 359.686 64.7345V44.4626C353.102 47.7801 349.467 53.2189 349.467 59.5828C349.467 64.575 351.699 68.1796 354.744 68.1796C356.753 68.1796 358.347 67.3661 359.734 65.7074Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[10],
                attrs: {
                    d: "M388.287 70.1573H387.426V69.8383L376.729 32.2452C375.071 26.3598 374.194 25.2114 370.591 23.4729V22.8668C372.727 22.8668 374.831 23.1539 376.649 23.1539C379.327 23.1539 382.404 22.9306 385.242 22.8668V23.5367C382.436 23.9992 381.081 25.5463 381.081 28.2897C381.081 29.3742 381.288 30.6343 381.702 32.1016L389.721 60.3802L396.513 32.3249C396.8 31.1127 396.943 30.0441 396.943 29.0871C396.943 26.0248 395.429 24.2066 392.336 23.5208V22.8668C394.823 22.9466 397.278 23.2337 399.382 23.2337C400.705 23.2337 402.236 22.9147 403.687 22.8668V23.5048C399.972 24.6532 398.458 29.5018 397.692 32.596L388.271 70.1573H388.287Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[11],
                attrs: {
                    d: "M405.902 69.5033C409.952 68.6102 411.004 67.1109 410.972 62.4058L410.765 32.309C410.733 28.3216 409.282 26.8702 405.615 26.9499V26.3279C408.788 25.036 412.359 23.1061 414.383 21.9099L415.754 22.2767L416.041 62.3739C416.073 67.0471 417.253 68.5783 421.191 69.4874V70.1413C418.56 70.0616 415.898 69.7745 413.65 69.7745C411.243 69.7745 408.373 70.0775 405.902 70.1254V69.4714V69.5033ZM408.58 14.0627C408.58 11.6383 409.967 10.2507 412.391 10.2507C414.814 10.2507 416.201 11.6383 416.201 14.0627C416.201 16.487 414.814 17.8746 412.391 17.8746C409.967 17.8746 408.58 16.487 408.58 14.0627Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[12],
                attrs: {
                    d: "M424.587 69.5033C428.604 68.6102 429.656 67.1428 429.656 62.4058V32.309C429.656 28.6725 428.365 26.7585 425.719 26.7585C425.352 26.7585 424.937 26.7904 424.523 26.8702V26.2003C427.679 24.9243 431.011 23.0742 433.036 21.878H434.232L434.295 27.3008C436.655 24.4937 440.035 21.7025 444.785 21.7025C449.536 21.7025 451.991 24.8286 451.991 30.411V62.4058C451.991 67.0631 453.171 68.6102 457.141 69.5193V70.1732C454.51 70.0935 451.848 69.8064 449.6 69.8064C447.193 69.8064 444.323 70.1094 441.852 70.1732V69.5193C445.869 68.6261 446.922 67.1587 446.922 62.4217V32.8034C446.922 27.9388 444.435 24.3501 441.103 24.3501C438.982 24.3501 436.687 25.7378 434.455 28.3216L434.742 62.3898C434.806 67.095 435.969 68.6102 439.891 69.5033V70.1573C437.261 70.0775 434.598 69.7904 432.351 69.7904C429.943 69.7904 427.074 70.0935 424.603 70.1413V69.4874L424.587 69.5033Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[13],
                attrs: {
                    d: "M473.401 87.0001C465.526 87.0001 461.572 82.3906 461.572 77.7653C461.572 74.4159 463.549 71.513 466.913 69.8224C464.665 68.8495 463.406 67.3821 462.768 65.0056C462.609 64.4314 462.545 63.8573 462.545 63.299C462.545 59.7582 465.335 56.4248 468.38 55.2764C464.681 52.7404 462.832 47.1102 462.832 38.657C462.832 27.5242 466.371 21.878 473.401 21.878C474.948 21.878 476.271 22.2768 478.184 23.3613C481.181 23.2816 483.684 18.2894 484.943 17.0453C485.677 16.3116 486.984 19.6929 486.984 21.3676C486.984 23.2497 484.8 24.3183 481.054 24.3183C480.575 24.3183 480.065 24.3024 479.539 24.2705C482.313 26.6788 483.875 31.8624 483.875 38.5772C483.875 50.8424 480.496 56.6799 473.306 56.6799C471.855 56.6799 470.5 56.4088 469.464 55.8506C466.259 56.7597 463.836 59.5828 463.836 62.1347C463.836 62.5813 463.916 63.0119 464.059 63.4266C464.745 65.2449 465.94 65.7393 467.758 65.7393C469.958 65.7393 473.035 65.0056 477.18 65.0056C479.746 65.0056 481.213 65.3565 482.743 66.3135C484.991 67.6851 486.187 71.0824 486.187 75.7875C486.187 82.6299 481.197 87.0001 473.369 87.0001H473.401ZM485.023 76.1544C485.023 73.092 483.891 70.8432 481.739 69.9978C481.006 69.6469 479.427 69.4236 477.132 69.4236C474.836 69.4236 471.982 69.631 468.507 70.1573C466.833 70.3966 465.861 72.2308 465.861 75.3728C465.861 80.1098 468.172 86.1547 473.545 86.1547C480.448 86.1547 485.023 82.1195 485.023 76.1544ZM475.761 55.5156C478.359 55.1328 479.603 52.3257 479.603 46.5679C479.603 44.319 479.396 41.0334 478.965 37.9392C477.722 28.6406 474.868 23.0742 471.456 23.0742C468.619 23.0742 467.264 25.9133 467.264 31.8465C467.264 40.7782 469.958 56.2653 475.745 55.5316L475.761 55.5156Z",
                    fill: "white"
                }
            })]) : e._e(), e._v(" "), "from-bottom-whole" === e.type ? n("svg", {
                attrs: {
                    width: "587",
                    height: "87",
                    viewBox: "0 0 587 87",
                    fill: "none"
                }
            }, [n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M36.7468 60.6194C38.4685 65.803 39.7758 68.5782 42.3265 69.5352V70.1572C40.1265 70.0775 37.1772 69.7904 35.4236 69.7904C32.3786 69.7904 29.8598 69.9339 26.6873 70.1572V69.5033C30.1946 68.5942 31.5496 67.0152 31.5496 64.224C31.5496 62.0548 30.9757 59.7422 27.6598 48.4339H9.39008L7.25384 56.616C6.63209 58.9925 6.29731 60.9543 6.29731 62.5812C6.29731 66.5845 8.29008 68.5463 12.7539 69.5033V70.1891C10.251 69.9339 7.93935 69.8063 5.64368 69.8063C4.0973 69.8063 1.37119 70.0137 0.0161133 70.2051V69.6309C2.5828 66.6483 3.96976 64.6227 6.09006 56.5523L19.2264 6.86938H20.422C23.196 15.8809 29.9395 39.7574 36.7468 60.6194ZM18.238 14.6209L9.6611 47.3972H27.3569C25.2844 40.3635 22.2235 30.076 17.6959 14.6209H18.238Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M45.1642 69.5033C49.1816 68.6101 50.2338 67.1428 50.2338 62.4057V32.3089C50.2338 28.6405 48.9265 26.7425 46.4236 26.7425C46.0729 26.7425 45.754 26.7425 45.0845 26.8701V26.2003C48.241 24.9243 51.5729 23.0741 53.5976 21.8779H54.7932L54.857 27.2848C56.8019 24.8126 58.8425 22.4202 62.7802 21.8141C63.2266 21.7344 63.5933 21.7344 64.0237 21.7344C67.3875 21.7344 70.018 23.8876 70.8629 27.221C72.7919 24.7807 74.8165 22.4202 78.7064 21.8141C79.1528 21.7344 79.5195 21.7344 79.9499 21.7344C84.8441 21.7344 87.347 24.6691 87.347 30.395V62.3898C87.347 67.4937 89.021 68.658 92.6239 69.5033V70.1572C89.9934 70.0775 87.3311 69.7904 85.0833 69.7904C82.676 69.7904 79.8064 70.0934 77.3354 70.1572V69.5033C81.3528 68.6101 82.405 67.1428 82.405 62.4057V32.8034C82.405 28.2099 80.5079 24.2704 77.2876 24.2704C75.5658 24.2704 73.4615 25.4028 71.0861 28.162C71.2136 28.8638 71.2774 29.3264 71.2774 30.4109L71.4846 62.4057C71.4846 67.5096 73.0788 68.6739 76.6977 69.5192V70.1732C74.0673 70.0934 71.4049 69.8063 69.1571 69.8063C66.7498 69.8063 63.8802 70.1094 61.4092 70.1732V69.5192C65.4266 68.6261 66.4788 67.1587 66.4788 62.4217V32.8034C66.4788 28.162 64.6136 24.2704 61.4092 24.2704C59.6396 24.2704 57.4715 25.4506 55.0005 28.3215L55.2874 62.3898C55.3512 67.0949 56.515 68.6101 60.4367 69.5033V70.1572C57.8063 70.0775 55.144 69.7904 52.8961 69.7904C50.4889 69.7904 47.6193 70.0934 45.1482 70.1413V69.4873L45.1642 69.5033Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M99.8297 70.859L99.6225 14.1264C99.5906 6.48661 98.6181 5.05115 96.7529 5.05115C96.0992 5.05115 95.35 5.22659 94.4731 5.37014V4.66836C97.6616 3.83898 101.217 2.18023 103.241 0.984009L104.612 1.35085V25.9451C105.633 24.7648 106.844 23.7919 108.279 23.0422C109.969 22.165 111.93 21.7344 114.05 21.7344C121.814 21.7344 125.959 29.6613 125.959 44.4306C125.959 57.1424 122.946 70.5081 113.141 70.5081C109.315 70.5081 106.382 66.6962 104.341 66.6962C102.301 66.6962 101.217 68.8494 100.675 70.859H99.8297ZM116.617 68.9132C120.491 67.1428 122.515 61.6402 122.515 52.6765C122.515 39.6138 117.095 23.5686 110.463 23.5686C106.525 23.5686 105.457 27.7793 104.612 33.25V56.632C104.612 62.4057 109.236 69.4554 114.273 69.4554C115.054 69.4554 115.836 69.296 116.617 68.9291V68.9132Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M131.124 69.5033C135.173 68.6102 136.225 67.1109 136.193 62.4058L135.986 32.309C135.954 28.3216 134.504 26.8702 130.837 26.9499V26.3279C134.009 25.036 137.58 23.1061 139.605 21.9099L140.976 22.2767L141.263 62.3739C141.295 67.0471 142.475 68.5783 146.412 69.4874V70.1413C143.782 70.0616 141.12 69.7745 138.872 69.7745C136.464 69.7745 133.595 70.0775 131.124 70.1254V69.4714V69.5033ZM133.802 14.0627C133.802 11.6383 135.189 10.2507 137.612 10.2507C140.036 10.2507 141.422 11.6383 141.422 14.0627C141.422 16.487 140.036 17.8746 137.612 17.8746C135.189 17.8746 133.802 16.487 133.802 14.0627Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M164.523 70.859C156.025 70.859 151.705 63.8731 151.705 50.2043C151.705 36.5356 156.424 21.5908 167.838 21.5908C171.505 21.5908 173.833 25.0838 173.833 30.5385C173.833 32.9948 173.323 35.6424 172.398 38.1784C170.07 44.2711 168.205 44.3508 162.482 44.4146C161.286 44.4146 159.883 44.4146 158.257 44.4784C156.392 44.5422 156.28 44.6539 156.28 45.8182C156.424 57.1264 159.389 69.2162 165.081 69.2162C169.241 69.2162 172.573 66.3293 174.279 61.1298L175.06 61.5285C173.195 67.2863 169.21 70.8271 164.507 70.8271L164.523 70.859ZM169.417 35.8976C169.417 27.5879 167.87 23.425 164.634 23.425C158.863 23.425 156.328 33.8879 156.328 43.362C156.328 43.4098 156.344 43.4258 156.392 43.4258C169.225 43.2025 169.433 44.303 169.433 35.8816L169.417 35.8976Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M178.281 69.5033C182.298 68.6102 183.35 67.1428 183.35 62.4058V32.309C183.35 28.6725 182.059 26.7585 179.412 26.7585C179.046 26.7585 178.631 26.7904 178.217 26.8702V26.2003C181.373 24.9243 184.705 23.0742 186.73 21.878H187.926L187.989 27.3008C190.349 24.4937 193.728 21.7025 198.479 21.7025C203.23 21.7025 205.685 24.8286 205.685 30.411V62.4058C205.685 67.0631 206.865 68.6102 210.834 69.5193V70.1732C208.204 70.0935 205.542 69.8064 203.294 69.8064C200.886 69.8064 198.017 70.1094 195.546 70.1732V69.5193C199.563 68.6261 200.615 67.1587 200.615 62.4217V32.8034C200.615 27.9388 198.129 24.3501 194.797 24.3501C192.676 24.3501 190.381 25.7378 188.149 28.3216L188.436 62.3898C188.499 67.095 189.663 68.6102 193.585 69.5033V70.1573C190.955 70.0775 188.292 69.7904 186.044 69.7904C183.637 69.7904 180.768 70.0935 178.297 70.1413V69.4874L178.281 69.5033Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M223.859 70.8591C220.224 70.8591 218.088 68.1157 218.088 63.5382V24.3502H214.007V23.1221C218.789 22.4681 220.91 22.0375 222.297 15.4025H222.871V22.8669L229.71 22.7233V24.4937L222.871 24.3502V62.6132C222.871 66.5686 224.034 68.6102 226.25 68.6102C227.318 68.6102 229.168 68.4028 230.22 64.7982L230.969 65.0534C229.821 68.9611 227.414 70.875 223.859 70.875V70.8591Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M272.929 70.5081H272.053L258.693 17.4439C257.21 11.5107 255.441 10.0274 252.205 8.38457V7.77849C254.468 7.85824 256.86 8.06558 258.757 8.06558C261.866 8.06558 265.357 7.76254 268.545 7.71469V8.43242C265.181 9.40535 263.603 11.1917 263.603 14.2859C263.603 15.2269 263.747 16.2796 264.034 17.4599L274.109 60.412C274.109 60.2047 273.695 60.2047 273.695 60.412L284.615 8.04963C284.615 7.66684 285.077 7.53925 285.3 7.98584L299.744 60.412C299.696 60.3004 299.345 60.3642 299.345 60.4918L306.328 26.918C306.886 24.2544 307.093 21.9576 307.093 19.9959C307.093 13.3608 304.415 9.11825 299.696 8.46432V7.71469C302.454 7.87419 304.431 8.01773 307.014 8.01773C308.209 8.01773 311.477 8.01773 313.072 7.84229V8.56002C311.701 9.78813 309.803 15.1312 308.624 21.0326C306.854 29.7889 304.24 43.7288 298.58 70.3805H297.783L283.387 19.4855L272.945 70.5081H272.929Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M328.727 70.859C320.229 70.859 315.909 63.8731 315.909 50.2043C315.909 36.5356 320.628 21.5908 332.043 21.5908C335.709 21.5908 338.037 25.0838 338.037 30.5385C338.037 32.9948 337.527 35.6424 336.602 38.1784C334.274 44.2711 332.409 44.3508 326.686 44.4146C325.49 44.4146 324.087 44.4146 322.461 44.4784C320.596 44.5422 320.485 44.6539 320.485 45.8182C320.628 57.1264 323.593 69.2162 329.285 69.2162C333.446 69.2162 336.777 66.3293 338.483 61.1298L339.264 61.5285C337.399 67.2863 333.414 70.8271 328.711 70.8271L328.727 70.859ZM333.621 35.8976C333.621 27.5879 332.074 23.425 328.838 23.425C323.067 23.425 320.532 33.8879 320.532 43.362C320.532 43.4098 320.548 43.4258 320.596 43.4258C333.43 43.2025 333.637 44.303 333.637 35.8816L333.621 35.8976Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M351.364 70.8591C347.49 70.8591 344.605 67.5097 344.605 63.0438C344.605 54.6863 349.515 48.3383 359.686 43.4099V36.8865C359.686 28.6885 358.156 23.7601 355.701 23.7601C352.959 23.7601 350.599 27.6518 350.599 32.0219C350.599 34.8929 351.062 36.2964 352.13 36.2964C352.305 36.2964 352.496 36.2645 352.704 36.1848L352.879 36.9184C352.018 37.684 350.934 38.0828 349.866 38.0828C347.538 38.0828 345.944 36.3283 345.944 33.7923C345.944 28.0664 352.688 22.0056 359.049 22.0056C362.763 22.0056 364.612 24.4618 364.612 29.3584V65.0854C364.612 66.9993 365.744 68.3231 367.354 68.3231C368.965 68.3231 370.352 67.0153 370.989 64.7504L371.643 65.0694C370.654 68.7378 368.454 70.8591 365.68 70.8591C362.651 70.8591 360.595 69.3917 359.957 66.8079C357.757 69.5512 354.951 70.8591 351.38 70.8591H351.364ZM359.734 65.7074C359.686 65.3725 359.686 65.0375 359.686 64.7345V44.4626C353.102 47.7801 349.467 53.2189 349.467 59.5828C349.467 64.575 351.699 68.1796 354.744 68.1796C356.753 68.1796 358.347 67.3661 359.734 65.7074Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M388.287 70.1573H387.426V69.8383L376.729 32.2452C375.071 26.3598 374.194 25.2114 370.591 23.4729V22.8668C372.727 22.8668 374.831 23.1539 376.649 23.1539C379.327 23.1539 382.404 22.9306 385.242 22.8668V23.5367C382.436 23.9992 381.081 25.5463 381.081 28.2897C381.081 29.3742 381.288 30.6343 381.702 32.1016L389.721 60.3802L396.513 32.3249C396.8 31.1127 396.943 30.0441 396.943 29.0871C396.943 26.0248 395.429 24.2066 392.336 23.5208V22.8668C394.823 22.9466 397.278 23.2337 399.382 23.2337C400.705 23.2337 402.236 22.9147 403.687 22.8668V23.5048C399.972 24.6532 398.458 29.5018 397.692 32.596L388.271 70.1573H388.287Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M405.902 69.5033C409.952 68.6102 411.004 67.1109 410.972 62.4058L410.765 32.309C410.733 28.3216 409.282 26.8702 405.615 26.9499V26.3279C408.788 25.036 412.359 23.1061 414.383 21.9099L415.754 22.2767L416.041 62.3739C416.073 67.0471 417.253 68.5783 421.191 69.4874V70.1413C418.56 70.0616 415.898 69.7745 413.65 69.7745C411.243 69.7745 408.373 70.0775 405.902 70.1254V69.4714V69.5033ZM408.58 14.0627C408.58 11.6383 409.967 10.2507 412.391 10.2507C414.814 10.2507 416.201 11.6383 416.201 14.0627C416.201 16.487 414.814 17.8746 412.391 17.8746C409.967 17.8746 408.58 16.487 408.58 14.0627Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M424.587 69.5033C428.604 68.6102 429.656 67.1428 429.656 62.4058V32.309C429.656 28.6725 428.365 26.7585 425.719 26.7585C425.352 26.7585 424.937 26.7904 424.523 26.8702V26.2003C427.679 24.9243 431.011 23.0742 433.036 21.878H434.232L434.295 27.3008C436.655 24.4937 440.035 21.7025 444.785 21.7025C449.536 21.7025 451.991 24.8286 451.991 30.411V62.4058C451.991 67.0631 453.171 68.6102 457.141 69.5193V70.1732C454.51 70.0935 451.848 69.8064 449.6 69.8064C447.193 69.8064 444.323 70.1094 441.852 70.1732V69.5193C445.869 68.6261 446.922 67.1587 446.922 62.4217V32.8034C446.922 27.9388 444.435 24.3501 441.103 24.3501C438.982 24.3501 436.687 25.7378 434.455 28.3216L434.742 62.3898C434.806 67.095 435.969 68.6102 439.891 69.5033V70.1573C437.261 70.0775 434.598 69.7904 432.351 69.7904C429.943 69.7904 427.074 70.0935 424.603 70.1413V69.4874L424.587 69.5033Z",
                    fill: "white"
                }
            }), e._v(" "), n("path", {
                style: e.pathStyles[0],
                attrs: {
                    d: "M473.401 87.0001C465.526 87.0001 461.572 82.3906 461.572 77.7653C461.572 74.4159 463.549 71.513 466.913 69.8224C464.665 68.8495 463.406 67.3821 462.768 65.0056C462.609 64.4314 462.545 63.8573 462.545 63.299C462.545 59.7582 465.335 56.4248 468.38 55.2764C464.681 52.7404 462.832 47.1102 462.832 38.657C462.832 27.5242 466.371 21.878 473.401 21.878C474.948 21.878 476.271 22.2768 478.184 23.3613C481.181 23.2816 483.684 18.2894 484.943 17.0453C485.677 16.3116 486.984 19.6929 486.984 21.3676C486.984 23.2497 484.8 24.3183 481.054 24.3183C480.575 24.3183 480.065 24.3024 479.539 24.2705C482.313 26.6788 483.875 31.8624 483.875 38.5772C483.875 50.8424 480.496 56.6799 473.306 56.6799C471.855 56.6799 470.5 56.4088 469.464 55.8506C466.259 56.7597 463.836 59.5828 463.836 62.1347C463.836 62.5813 463.916 63.0119 464.059 63.4266C464.745 65.2449 465.94 65.7393 467.758 65.7393C469.958 65.7393 473.035 65.0056 477.18 65.0056C479.746 65.0056 481.213 65.3565 482.743 66.3135C484.991 67.6851 486.187 71.0824 486.187 75.7875C486.187 82.6299 481.197 87.0001 473.369 87.0001H473.401ZM485.023 76.1544C485.023 73.092 483.891 70.8432 481.739 69.9978C481.006 69.6469 479.427 69.4236 477.132 69.4236C474.836 69.4236 471.982 69.631 468.507 70.1573C466.833 70.3966 465.861 72.2308 465.861 75.3728C465.861 80.1098 468.172 86.1547 473.545 86.1547C480.448 86.1547 485.023 82.1195 485.023 76.1544ZM475.761 55.5156C478.359 55.1328 479.603 52.3257 479.603 46.5679C479.603 44.319 479.396 41.0334 478.965 37.9392C477.722 28.6406 474.868 23.0742 471.456 23.0742C468.619 23.0742 467.264 25.9133 467.264 31.8465C467.264 40.7782 469.958 56.2653 475.745 55.5316L475.761 55.5156Z",
                    fill: "white"
                }
            })]) : e._e()])
        }
        ), [], !1, (function(e) {
            this.$style = r.default.locals || r.default
        }
        ), null, null);
        t.default = component.exports
    },
    149: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(2)
          , l = Object(o.b)({
            props: {
                animate: {
                    type: Boolean,
                    default: !1
                }
            }
        })
          , r = n(99)
          , c = n(19);
        var component = Object(c.a)(l, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("h1", {
                class: e.$style.root
            }, [n("div", {
                directives: [{
                    name: "letterfade",
                    rawName: "v-letterfade",
                    value: {
                        enabled: e.animate
                    },
                    expression: "{ enabled: animate }"
                }],
                class: e.$style.small
            }, [e._v("\n    Research And Innovation\n  ")]), e._v(" "), n("div", {
                directives: [{
                    name: "letterfade",
                    rawName: "v-letterfade",
                    value: {
                        enabled: e.animate
                    },
                    expression: "{ enabled: animate }"
                }],
                class: e.$style.main
            }, [e._v("\n    Project Foil\n  ")])])
        }
        ), [], !1, (function(e) {
            this.$style = r.default.locals || r.default
        }
        ), null, null);
        t.default = component.exports
    },
    150: function(e, t, n) {
        n(151),
        n(152),
        e.exports = n(156)
    },
    186: function(e, t, n) {},
    187: function(e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNzIgMTEwIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAyLjQgMTA5LjZINy44Yy00LjEgMC03LjMtMy03LjMtNi45VjU5LjJjMC0zLjkgMy4yLTYuOSA3LjMtNi45aDk0LjZjNC4xIDAgNy4zIDMgNy4zIDYuOXY0My41Yy0uMSAzLjgtMy4zIDYuOS03LjMgNi45ek03LjggNTMuM2MtMy41IDAtNi4zIDIuNi02LjMgNS45djQzLjVjMCAzLjMgMi43IDUuOSA2LjMgNS45aDk0LjZjMy41IDAgNi4zLTIuNiA2LjMtNS45VjU5LjJjMC0zLjMtMi43LTUuOS02LjMtNS45SDcuOHoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTA0LjcgODcuMWMtLjMgMC0uNS0uMi0uNS0uNVY3NC43YzAtLjMuMi0uNS41LS41cy41LjIuNS41djExLjljMCAuMy0uMi41LS41LjV6TTkzLjEgMTA1LjlIMTMuOWMtMy4zIDAtNi0yLjctNi02VjYxLjNjMC0zLjMgMi43LTYgNi02aDc5LjJjMy4zIDAgNiAyLjcgNiA2djM4LjZjMCAzLjMtMi43IDYtNiA2ek0xMy45IDU2LjNjLTIuOCAwLTUgMi4yLTUgNXYzOC42YzAgMi44IDIuMiA1IDUgNWg3OS4yYzIuOCAwIDUtMi4yIDUtNVY2MS4zYzAtMi44LTIuMi01LTUtNUgxMy45ek0xNjQuNiAxMDkuNmgtNDMuNWMtMy45IDAtNi45LTMuMi02LjktNy4zVjcuN2MwLTQuMSAzLTcuMyA2LjktNy4zaDQzLjVjMy45IDAgNi45IDMuMiA2LjkgNy4zdjk0LjZjMCA0LjEtMyA3LjMtNi45IDcuM3pNMTIxLjEgMS40Yy0zLjMgMC01LjkgMi43LTUuOSA2LjN2OTQuNmMwIDMuNSAyLjYgNi4zIDUuOSA2LjNoNDMuNWMzLjMgMCA1LjktMi43IDUuOS02LjNWNy43YzAtMy41LTIuNi02LjMtNS45LTYuM2gtNDMuNXoiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQ4LjUgNS44aC0xMS45Yy0uMyAwLS41LS4yLS41LS41cy4yLS41LjUtLjVoMTEuOWMuMyAwIC41LjIuNS41cy0uMi41LS41LjV6TTE2MS45IDEwMi4yaC0zOC42Yy0zLjMgMC02LTIuNy02LTZWMTYuOWMwLTMuMyAyLjctNiA2LTZoMzguNmMzLjMgMCA2IDIuNyA2IDZ2NzkuMmMwIDMuNC0yLjcgNi4xLTYgNi4xem0tMzguNy05MC4zYy0yLjggMC01IDIuMi01IDV2NzkuMmMwIDIuOCAyLjIgNSA1IDVoMzguNmMyLjggMCA1LTIuMiA1LTVWMTYuOWMwLTIuOC0yLjItNS01LTVoLTM4LjZ6Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2MC40IiB5MT0iNDkuMTIiIHgyPSI5Mi4xOTYiIHkyPSI4MC44MjUiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxMTIpIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iLjQiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Im05OSAzOC0xNC40LTkuMS43IDUuMWMtNS4xLjMtMTAuOCAyLjItMTUuMSA1LjYtNy40IDYuMS0xMC40IDE1LjUtOC44IDI0LjNoLjZjLS42LTYuNyAxLjktMTMuNiA3LjUtMTguMiA0LjItMy40IDEwLjctNC45IDE1LjctNC43bC0uOCA1LjdMOTkgMzh6IiBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIvPjwvc3ZnPgo="
    },
    26: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "b", (function() {
            return r
        }
        )),
        n.d(t, "c", (function() {
            return c
        }
        ));
        var o, l = n(2);
        !function(e) {
            e[e.none = 0] = "none",
            e[e.loading = 1] = "loading",
            e[e.setup = 2] = "setup",
            e[e.done = 3] = "done"
        }(o || (o = {}));
        const r = Object(l.j)(o.none)
          , c = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.done;
            const n = Object(l.p)(r, (o => {
                o === t && requestAnimationFrame(( () => {
                    n(),
                    e()
                }
                ))
            }
            ), {
                immediate: !0
            })
        }
    },
    73: function(e, t, n) {
        e.exports = {
            main: "cSkVO",
            fill: "K0862",
            fill__content: "_5i2qT",
            loading: "wwqJy",
            "progress-circular-rotate": "r9PMU",
            "progress-circular-dash": "QXuSb",
            cursor: "iHCEz",
            "cursor--hover": "aWk4n",
            "cursor--visible": "efxDC",
            logo: "MI3NZ",
            logo1: "HGmk1",
            logo2: "+8Pj-",
            init__msg: "_691Vi",
            init__button: "_27cgj",
            "init__button--off": "UU7Ds",
            menu_btn: "O9+LS",
            menu_btn__bar: "PfyF8",
            "menu_btn__bar--top": "_2nAES",
            "menu_btn__bar--middle": "_4Fsgu",
            "menu_btn__bar--bottom": "_4XAAJ",
            "menu_btn--opened": "AiO1n",
            menu: "RcyhO",
            "menu--visible": "YOg6-",
            menu__list: "LSAOM",
            menu__item: "_0XqUF",
            "menu__item--switch": "_6sCdo",
            menu__item__title: "WIQwn",
            menu__link: "DYT38",
            landscape__content_img: "qb7An"
        }
    },
    74: function(e, t, n) {
        e.exports = {
            root: "Vhspr",
            small: "xMoyH",
            main: "jnDOB"
        }
    },
    75: function(e, t, n) {
        e.exports = {
            logoContainer: "_1wYff"
        }
    },
    76: function(e, t, n) {
        e.exports = {
            root: "_9BfxP",
            svg: "knYn7",
            rect: "Si5HW"
        }
    },
    98: function(e, t, n) {
        "use strict";
        var o = n(73)
          , l = n.n(o);
        n.d(t, "default", (function() {
            return l.a
        }
        ))
    },
    99: function(e, t, n) {
        "use strict";
        var o = n(74)
          , l = n.n(o);
        n.d(t, "default", (function() {
            return l.a
        }
        ))
    }
}, [[150, 18, 19]]]);
