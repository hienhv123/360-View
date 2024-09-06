(window.webpackJsonp = window.webpackJsonp || []).push([[22], {
    388: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, "default", (function() {
            return P
        }
        ));
        n(11);
        var o = n(374)
          , r = n(270)
          , h = n(376)
          , d = n(375)
          , c = n(271)
          , l = n(378)
          , _ = n(377)
          , m = n(240)
          , w = n(256)
          , x = n(291)
          , y = n(363)
          , A = n.n(y)
          , v = n(379)
          , I = n(242);
        Math.PI;
        const z = ( () => {
            const e = document.createElement("div");
            return Object.assign(e.style, {
                position: "fixed",
                top: "0",
                left: "0",
                width: "0",
                height: "100%",
                pointerEvents: "none"
            }),
            document.body.appendChild(e),
            () => e.getBoundingClientRect()
        }
        )()
          , T = Math.PI / 180
          , f = /(iphone|ipod|android)/;
        class P {
            constructor(canvas, e) {
                this._textures = [],
                this._meshIndex = 0,
                this._vw = 0,
                this._vh = 0,
                this._azimuthalAngle = "0",
                this._polarAngle = "0",
                this._distance = "0",
                this._isUpdated = !1,
                this._isTour = !1,
                this._tourReqId = 0,
                this._reqId = 0;
                const t = window.innerWidth
                  , {height: n} = z()
                  , l = new r.a(90,t / n,.1,100)
                  , _ = new o.a
                  , y = new h.a({
                    powerPreference: "high-performance",
                    canvas: canvas
                })
                  , v = new d.a(1,60,40)
                  , I = new x.a({
                    side: m.h,
                    opacity: 0,
                    transparent: !0
                })
                  , f = new c.a(v,I);
                this.animate = this.animate.bind(this),
                l.position.set(0, 0, .01),
                this.resize = A()(this.resize.bind(this), 1e3 / 30),
                window.addEventListener("resize", this.resize, {
                    passive: !0
                }),
                f.scale.x = -1,
                f.rotateY(-90 * T);
                const P = f.clone();
                P.material = f.material.clone(),
                f.parent = P.parent = _,
                _.background = new w.a(0,0,0),
                this._camera = l,
                this._scene = _,
                this._renderer = y,
                this._meshs = [f, P],
                this._angle = e,
                this._initCameraControll(),
                this.resize(),
                this.animate()
            }
            _initCameraControll() {
                const e = new l.a(this._camera,this._renderer.domElement);
                e.rotateSpeed = -.25,
                e.enableZoom = !1,
                e.enablePan = !1,
                e.enableDamping = !0,
                e.minPolarAngle = 60 * T,
                e.maxPolarAngle = 120 * T,
                e.minAzimuthAngle = -90 * T,
                e.maxAzimuthAngle = 90 * T,
                this._controls = e
            }
            dispose() {
                var e;
                cancelAnimationFrame(this._reqId),
                cancelAnimationFrame(this._tourReqId),
                window.removeEventListener("resize", this.resize),
                this._camera.clear(),
                this._scene.clear(),
                this._renderer.dispose(),
                null === (e = this._controls) || void 0 === e || e.dispose(),
                this._textures.forEach((e => e.dispose())),
                delete this._camera,
                delete this._scene,
                delete this._renderer,
                delete this._controls,
                delete this._textures,
                delete this.resize
            }
            async loadTextures(e) {
                const t = new _.a;
                this._textures = await Promise.all(e.map((async source => await t.loadAsync(source))))
            }
            switchTexture(e) {
                if (!this._isTour)
                    return new Promise((t => {
                        const n = this
                          , {_meshIndex: o, _meshs: r, _textures: h, _scene: d} = this
                          , c = r[o]
                          , l = c.material
                          , _ = (o + 1) % r.length
                          , m = r[_]
                          , w = m.material;
                        this._meshIndex = _,
                        e = Math.min(h.length - 1, Math.max(0, e));
                        const x = w.map ? h.indexOf(w.map) : -1
                          , y = (x < e ? 1 : -1) * (h.length / 2 > Math.abs(x - e) ? 1 : -1);
                        l.map = h[e],
                        l.needsUpdate = !0;
                        const A = v.a.timeline();
                        let z = 2
                          , f = 360;
                        if (this._isUpdated = !0,
                        w.opacity) {
                            const e = m.rotation.y;
                            z = 1,
                            f = 180,
                            A.to({}, {
                                duration: 1,
                                ease: I.c.easeIn,
                                onUpdate() {
                                    w.opacity = 1 - this.ratio,
                                    m.rotation.y = e + 180 * this.ratio * T * y
                                },
                                onComplete() {
                                    w.opacity = 0,
                                    m.rotation.y = e
                                }
                            })
                        }
                        const P = c.rotation.y;
                        A.to({}, {
                            duration: z,
                            ease: I.c.easeOut,
                            onStart() {
                                d.children[0] = c
                            },
                            onUpdate() {
                                l.opacity = this.ratio,
                                c.rotation.y = P - f * (1 - this.ratio) * T * y
                            },
                            onComplete() {
                                l.opacity = 1,
                                c.rotation.y = P,
                                n._isUpdated = !1,
                                t()
                            }
                        })
                    }
                    ))
            }
            onTourFinished(e) {
                this._onTourFinished = e
            }
            startTour(e) {
                const {_meshIndex: t, _meshs: n, _textures: o, _camera: r, _controls: h} = this
                  , d = (t + 1) % n.length;
                this._isUpdated = !0,
                this._isTour = !0,
                new Promise((e => {
                    const t = n[d].material;
                    t.opacity ? v.a.timeline().to({}, {
                        duration: .25,
                        ease: I.c.easeOut,
                        onUpdate() {
                            t.opacity = 1 - this.ratio
                        },
                        onComplete() {
                            t.opacity = 0,
                            e()
                        }
                    }) : e()
                }
                )).then(( () => {
                    const c = n[t]
                      , l = c.material
                      , _ = performance.now()
                      , m = e => {
                        const progress = Math.min(1, Math.max(0, (e - _) / 15e3));
                        progress < .1 ? l.opacity = progress / .1 : progress > .9 && (l.opacity = (1 - progress) / .1),
                        r.rotation.y = (progress - .5) * -Math.PI,
                        1 === progress ? this._onTourFinished && (this._isUpdated = !1,
                        this._isTour = !1,
                        this._onTourFinished()) : this._isTour && (this._tourReqId = requestAnimationFrame(m))
                    }
                    ;
                    h && (h.reset(),
                    h.dispose(),
                    delete this._controls),
                    r.rotation.set(0, 0, 0),
                    l.map = o[Math.min(o.length - 1, Math.max(0, e))],
                    l.needsUpdate = !0,
                    this._scene.children[0] = c,
                    this._meshIndex = d,
                    m(_)
                }
                ))
            }
            stopTour() {
                const e = this._camera.rotation
                  , t = e.clone();
                this._isTour = !1,
                cancelAnimationFrame(this._tourReqId),
                v.a.timeline().to({}, {
                    duration: 1,
                    ease: I.c.easeInOut,
                    onUpdate() {
                        const n = 1 - this.ratio;
                        e.set(t.x * n, t.y * n, t.z * n)
                    },
                    onComplete: () => {
                        this._isUpdated = !1,
                        this._controls || this._initCameraControll()
                    }
                })
            }
            get isTour() {
                return this._isTour
            }
            animate() {
                const {_controls: e} = this;
                if (this._reqId = requestAnimationFrame(this.animate),
                !e)
                    return void (this._isUpdated && this.render());
                const t = e.getAzimuthalAngle().toFixed(6)
                  , n = e.getPolarAngle().toFixed(6)
                  , o = e.getDistance().toFixed(6);
                if (!this._isUpdated && this._polarAngle === n && this._distance === o && this._azimuthalAngle === t)
                    return;
                const r = -1 * (t / (Math.PI / 180)).toFixed(2);
                this._angle.value !== r && (this._angle.value = r),
                this._polarAngle = n,
                this._distance = o,
                this._azimuthalAngle = t,
                e.update(),
                this.render()
            }
            render() {
                this._renderer.render(this._scene, this._camera)
            }
            resize() {
                const e = navigator.userAgent.toLowerCase()
                  , t = window.innerWidth
                  , {height: n} = z()
                  , {_renderer: o, _camera: r, _vw: h} = this;
                f.test(e) && h === t || (o.setPixelRatio(1),
                o.setSize(t, n),
                r.aspect = t / n,
                r.updateProjectionMatrix(),
                this._vw = t,
                this._vh = n)
            }
        }
    }
}]);
