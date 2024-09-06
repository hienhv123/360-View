(window.webpackJsonp = window.webpackJsonp || []).push([[16, 3, 4], {
    244: function(t, e, n) {
        t.exports = {
            circle: "C71Z5",
            triangle: "YKHwx",
            root: "ksLDC",
            root__active: "v9CP-"
        }
    },
    253: function(t, e, n) {
        t.exports = {
            root: "YKp5w",
            img: "EB75U"
        }
    },
    257: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return c
        }
        ));
        const c = "Ambient Weaving"
    },
    268: function(t, e, n) {
        "use strict";
        var c = n(244)
          , o = n.n(c);
        n.d(e, "default", (function() {
            return o.a
        }
        ))
    },
    274: function(t, e, n) {
        t.exports = {
            root: "_77b9F",
            canvas: "dwGnA",
            project: "Tedr4",
            map: "dTzak",
            // project__handle: "ChuUP",
            project__btn__switch: "bR-Bo",
            project__btn__switch__next: "_416Jk",
            // project__btn_detail: "pZ3ti",
            // project__phrase: "QjSMv",
            // project__title: "xg4Xv",
            // project__btn__detail: "-CLgo",
            // project__content: "_7kTnN",
            // tour: "T4Mub",
            // tour__start_btn: "-oXtN"
        }
    },
    282: function(t, e, n) {
        "use strict";
        n.r(e);
        var c = n(2)
          , o = Object(c.b)({
            props: {
                point: {
                    type: Object,
                    required: !0
                }
            },
            setup(t) {
                const e = Object(c.n)()
                  , n = Object(c.j)(0)
                  , o = Object(c.j)(!1)
                  , l = Object(c.e)("cameraAngle");
                let r;
                const j = Object(c.p)(e, (e => {
                    const code = e.hash.slice(1) || "wave-of-warmth";
                    o.value = t.point.code === code,
                    r && (r(),
                    r = null),
                    o.value && (r = Object(c.p)(l, (e => {
                        n.value = e + t.point.angle
                    }
                    ), {
                        immediate: !0
                    }))
                }
                ), {
                    immediate: !0
                });
                return Object(c.g)(( () => {
                    j(),
                    r && r()
                }
                )),
                {
                    angle: n,
                    active: o
                }
            }
        })
          , l = n(268)
          , r = n(19);
        var component = Object(r.a)(o, (function() {
            var t, e = this, n = e.$createElement, c = e._self._c || n;
            return c("nuxt-link", {
                class: [e.$style.root, (t = {},
                t[e.$style.root__active] = e.active,
                t)],
                style: "\n    left: " + e.point.x + "%;\n    top: " + e.point.y + "%;\n    transform: translate(-50%, -50%) rotate(" + e.angle + "deg);\n  ",
                attrs: {
                    to: "#" + e.point.code
                }
            }, [c("i", {
                class: e.$style.circle
            }), e._v(" "), c("i", {
                class: e.$style.triangle
            })])
        }
        ), [], !1, (function(t) {
            this.$style = l.default.locals || l.default
        }
        ), null, null);
        e.default = component.exports
    },
    286: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTE0IiBoZWlnaHQ9IjE3MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNODguOTkzIDEyMi4xdi03LjZoMTMuNDM3di0xMC44MDdINzcuMDk4djIuMDAzaC01LjczMVYuNDAxSDFWMTU0Ljk4aDcwLjM2N3YtNDIuNDgzaDUuNzMxdjIuMDAzaDUuMzIydjcuNmgtMi44NjV2MzIuODhoMTEuNzA3djMuMzc4SDc5LjMwN3YxNC4xNDhoMzMuNzcxbC4wNDEtMTQuMTQ4SDk4LjkyOHYtMy4zNzhIMTEzLjAxVjEyMi4xSDg4Ljk5M1oiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iTTcxLjQ1MyAxMzEuNzk1SDF2MjMuMTg1aDcwLjQ1M3YtMjMuMTg1WiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii4zIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNNTYuMjUyIDEzOC45MzNoLTcuNDU0djguOTA5aDcuNDU0di04LjkwOVpNMzkuOTIxIDEzOC45MzNoLTcuNDU0djguOTA5aDcuNDU0di04LjkwOVpNMjMuNTkgMTM4LjkzM2gtNy40NTR2OC45MDloNy40NTR2LTguOTA5Wk01OS44MjIgMTUuMTM3aC04Ljk3djYuMDAxaDguOTd2LTZaTTQ3LjA2IDE1LjEzN2gtOC45N3Y2LjAwMWg4Ljk3di02Wk0zNC4yOTkgMTUuMTM3aC04Ljk3djYuMDAxaDguOTd2LTZaTTIxLjUzNiAxNS4xMzdoLTguOTd2Ni4wMDFoOC45N3YtNlpNNTguNTkxIDk0LjIzM0gxMy44djEwLjQyNGg0NC43OTJWOTQuMjMzWk0xMDYuMDI4IDEyNy4zMjdoLS4zNzl2MjIuNDI4aC4zNzl2LTIyLjQyOFpNMTA2LjAyOCAxNTkuODQxaC0uMzc5djExLjE4NGguMzc5di0xMS4xODRaTTMyLjM0NyAxNTQuMzExaC0xMS42NHYuNjcxaDExLjY0di0uNjcxWk0xNy40OTMgMTU0LjMxMUg2LjM5OHYuNjcxaDExLjA5NXYtLjY3MVpNMS43ODcgMTE0LjY2N2gtLjYzM3YxMS4xMTloLjYzM3YtMTEuMTE5Wk00MC40ODIgMzguOTg3aC04LjUxM3YuODloOC41MTN2LS44OVpNMjAuMDIyIDQ4Ljg0aC0yLjk2OXYyLjk3aDIuOTd2LTIuOTdaTTEwMC44MTQgMTA0LjE4N2gtLjk0N3Y5Ljg1NmguOTQ3di05Ljg1NlpNNDkuNzQgNzQuMDI0djEuNTM3TTIyLjY0OCA3NS41NjFWNjQuNjFNMzUuNzk3IDc1LjU2NHYtMjYuNzhhLjQ5Mi40OTIgMCAxIDEgLjk4NCAwVjYyLjk1aC0uMjI5VjQ4Ljc4NWEuMjY0LjI2NCAwIDEgMC0uNTI4IDB2MjYuNzc5IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9Ik0yMi42NDggNzUuNTYxdjEuNzk0SDQ5Ljc0di0xLjc5NEgyMi42NDdaTTQ4LjQ2IDM2LjIyN0gyMy45MzlhMS4yODMgMS4yODMgMCAwIDAtMS4yODMgMS4yODN2MjcuMDg2aDEuNzk0VjM4Ljk5aDIzLjUxNnYzNS4wMzVoMS43OTRWMzcuNTIzYTEuMjgzIDEuMjgzIDAgMCAwLTEuMjgzLTEuMjgzTTM2LjI5MSA0OC41MThWNzUuNTZNMjQuMzEzIDY0LjYxVjc1LjU2TTM2LjI5MSA2NS4xMkgyNC4zMTNNMzYuMjkxIDYzLjEzNmgtMTEuODVNMzYuMjkxIDYxLjE1aC0xMS44NU0zNi4yOTEgNTkuMWgtMTEuODVNMzYuMjkxIDU3LjExNGgtMTEuODVNMzYuMjkxIDU1LjEzaC0xMS44NU0zNi4yOTEgNTMuMDhoLTExLjg1TTM2LjI5MSA1MS4wOTRoLTExLjg1TTM2LjI5MSA2NC4zNTNoMTEuNjU2TTM2LjI5MSA2Mi4zNjdoMTEuNjU2TTM2LjI5MSA2MC4zOGgxMS42NTZNMzYuMjkxIDU4LjM5N2gxMS42NTZNMzYuMjkxIDU2LjM0NmgxMS42NTZNMzYuMjkxIDU0LjM2aDExLjY1Nk0zNi4yOTEgNTIuMzc0aDExLjY1Nk0zNi4yOTEgNTAuMzI2aDExLjY1Nk00OC4yMDQgNzUuNTYxdi0xLjUzNyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii4zIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48L3N2Zz4="
    },
    287: function(t, e, n) {
        "use strict";
        var c = n(253)
          , o = n.n(c);
        n.d(e, "default", (function() {
            return o.a
        }
        ))
    },
    298: function(t, e, n) {
        "use strict";
        n.r(e);
        var c = n(2);
        const o = [{
            code: "wave-of-warmth",
            map: {
                x: 29.87,
                y: 82,
                angle: 180
            }
        }, {
            code: "drifting-colors",
            map: {
                x: 13.87,
                y: 119.6,
                angle: 180
            }
        }, {
            code: "memories-of-flow",
            map: {
                x: 29.87,
                y: 22.6,
                angle: 0
            }
        }, {
            code: "woven-clouds",
            map: {
                x: 89.87,
                y: 132.6,
                angle: 90
            }
        }, {
            code: "woven-glow",
            map: {
                x: 89.87,
                y: 159.6,
                angle: 90
            }
        }, {
            code: "ambient-sensing-instruments-and-visualization",
            map: {
                x: 3.87,
                y: 44.6,
                angle: 90
            },
            isCustomDetail: !0
        }, {
            code: "historical-research",
            map: {
                x: 83.87,
                y: 103.6,
                angle: 90
            }
        }].map((t => {
            let {code: code, map: {x: e, y: n, angle: c}} = t;
            return {
                code: code,
                x: ((e + 5) / 114 * 100).toFixed(2),
                y: ((n + 5) / 173 * 100).toFixed(2),
                angle: c
            }
        }
        ));
        var l = Object(c.b)({
            setup: () => ({
                points: o
            })
        })
          , r = n(287)
          , j = n(19);
        var component = Object(j.a)(l, (function() {
            var t = this
              , e = t.$createElement
              , c = t._self._c || e;
            return c("div", {
                class: t.$style.root
            }, [c("img", {
                class: t.$style.img,
                attrs: {
                    src: n(286),
                    width: "114",
                    height: "173",
                    alt: "展示会場マップ"
                }
            }), t._v(" "), t._l(t.points, (function(t, i) {
                return c("gallery-map-point", {
                    key: i,
                    attrs: {
                        point: t
                    }
                })
            }
            ))], 2)
        }
        ), [], !1, (function(t) {
            this.$style = r.default.locals || r.default
        }
        ), null, null);
        e.default = component.exports;
        installComponents(component, {
            GalleryMapPoint: n(282).default
        })
    },
    347: function(t, e, n) {
        "use strict";
        var c = n(274)
          , o = n.n(c);
        n.d(e, "default", (function() {
            return o.a
        }
        ))
    },
    383: function(t, e, n) {
        "use strict";
        n.r(e);
        n(11);
        var c = n(2)
          , meta = n(257)
          , o = n(26)
          , l = Object(c.b)({
            name: "VirtualGalleryIndex",
            setup() {
                const {i18n: t} = Object(c.l)()
                  , e = t.t("projects");
                let l;
                const r = Object(c.n)()
                  , j = Object(c.o)()
                  , M = Object(c.j)(0)
                  , d = Object(c.j)(!1)
                  , N = Object(c.j)(!1)
                  , canvas = Object(c.j)(null)
                  , T = Object(c.e)("isFullscreen")
                  , x = Object(c.j)("")
                  , I = Object(c.j)("")
                  , y = Object(c.a)(( () => {
                    const code = r.value.hash.slice(1)
                      , t = e.find((t => t.code === code));
                    if (!t || !d.value)
                        return -1;
                    const n = e.indexOf(t)
                      , c = e.length;
                    return l && (T.value ? l.startTour(n) : l.isTour ? l.stopTour() : l.switchTexture(n)),
                    x.value = e[(n + 1) % c].code,
                    I.value = e[(n + c - 1) % c].code,
                    n
                }
                ))
                  , L = e.map((t => {
                    let {code: code} = t;
                    return {
                        spherical: "./assets/images/projects/".concat(code, "/spherical.jpg"),
                        icon: "./assets/images/projects/".concat(code, "/icon.jpg")
                    }
                }
                ));
                return Object(c.f)((async () => {
                    const {default: t} = await Promise.all([n.e(21), n.e(22)]).then(n.bind(null, 388));
                    l = new t(canvas.value,M),
                    await l.loadTextures(L.map((data => data.spherical))),
                    d.value = !0,
                    await new Promise((t => Object(o.c)(t))),
                    l.onTourFinished(( () => {
                        j.push({
                            hash: "#".concat(e[(y.value + 1) % e.length].code)
                        })
                    }
                    )),
                    -1 === y.value ? j.push({
                        hash: "#".concat(e[0].code)
                    }) : l.switchTexture(y.value)
                }
                )),
                Object(c.g)(( () => {
                    null == l || l.dispose()
                }
                )),
                Object(c.m)({
                    title: "Virtual Gallery | ".concat(meta.a)
                }),
                Object(c.h)("cameraAngle", M),
                {
                    isFullscreen: T,
                    isTransition: N,
                    initialized: d,
                    canvas: canvas,
                    projects: e,
                    currentProject: Object(c.a)(( () => e[y.value])),
                    currentIndex: y,
                    prevId: I,
                    nextId: x,
                    onBeforeLeave() {
                        N.value = !0
                    },
                    onAfterEnter() {
                        N.value = !1
                    },
                    playTour() {
                        T.value = "tour"
                    }
                }
            },
            head: {}
        })
          , r = n(347)
          , j = n(19);
        var component = Object(j.a)(l, (function() {
            var t = this
              , e = t.$createElement
              , n = t._self._c || e;
            return n("div", {
                class: t.$style.root
            }, [n("canvas", {
                ref: "canvas",
                class: t.$style.canvas
            }), t._v(" "), n("transition", {
                attrs: {
                    name: "fade",
                    mode: "out-in"
                }
            }, [t.isFullscreen ? n("div", {
                key: "tour-" + t.currentProject.code,
                class: t.$style.tour
            }, [n("div", {
                class: t.$style.project__title
            }, [n("v-html", {
                attrs: {
                    tag: "div",
                    content: t.currentProject.title
                }
            }), t._v(" "), n("v-html", {
                class: t.$style.project__phrase,
                attrs: {
                    tag: "div",
                    content: t.currentProject.phrase
                }
            })], 1)]) : n("div", [n("gallery-map", {
                class: t.$style.map
            }), t._v(" "), n("div", {
                class: t.$style.project
            }, [n("div", {
                class: t.$style.project__handle
            }, [n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [n("nuxt-link", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isTransition && t.prevId,
                    expression: "!isTransition && prevId"
                }],
                class: [t.$style.project__btn__switch, t.$style.project__btn__switch__prev],
                attrs: {
                    to: "#" + t.prevId,
                    "aria-label": "前へ"
                }
            })], 1)], 1), t._v(" "), n("transition", {
                attrs: {
                    name: "project-spherical-transition",
                    mode: "out-in",
                    duration: {
                        enter: 2500
                    }
                },
                on: {
                    "before-leave": t.onBeforeLeave,
                    "after-enter": t.onAfterEnter
                }
            }, [t._l(t.projects, (function(e, i) {
                return [i === t.currentIndex ? n("div", {
                    key: e.code,
                    class: t.$style.project__content
                }, [n("nuxt-link", {
                    staticClass: "cursor-hover-fit",
                    class: t.$style.project__btn__detail,
                    style: "background-image: url(./assets/images/projects/" + e.code + "/icon.jpg);",
                    attrs: {
                        to: t.localePath("/virtualgallery/" + e.code + "?from=" + encodeURIComponent("" + t.$route.path + t.$route.hash)),
                        "aria-label": "詳細へ"
                    }
                }), t._v(" "), n("div", {
                    class: t.$style.project__title
                }, [n("v-html", {
                    attrs: {
                        tag: "div",
                        content: e.title
                    }
                }), t._v(" "), n("v-html", {
                    class: t.$style.project__phrase,
                    attrs: {
                        tag: "div",
                        content: e.phrase
                    }
                })], 1)], 1) : t._e()]
            }
            ))], 2), t._v(" "), n("div", {
                class: t.$style.project__handle
            }, [n("transition", {
                attrs: {
                    name: "fade"
                }
            }, [n("nuxt-link", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isTransition && t.nextId,
                    expression: "!isTransition && nextId"
                }],
                class: [t.$style.project__btn__switch, t.$style.project__btn__switch__next],
                attrs: {
                    to: "#" + t.nextId,
                    "aria-label": "次へ"
                }
            })], 1)], 1)], 1), t._v(" "), n("button", {
                class: t.$style.tour__start_btn,
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.playTour
                }
            }, [t._v("\n        Preview Mode\n      ")])], 1)])], 1)
        }
        ), [], !1, (function(t) {
            this.$style = r.default.locals || r.default
        }
        ), null, null);
        e.default = component.exports;
        installComponents(component, {
            GalleryMap: n(298).default,
            VHtml: n(147).default
        })
    }
}]);
