google.maps.__gjsload__('overlay', function(_) {
    var sC = function(a) {
            this.Eg = a
        },
        Bya = function() {},
        tC = function(a) {
            a.cA = a.cA || new Bya;
            return a.cA
        },
        Cya = function(a) {
            this.Eh = new _.$l(() => {
                const b = a.cA;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.gy && a.onAdd) a.onAdd();
                        b.gy = !0;
                        a.draw()
                    }
                } else {
                    if (b.gy)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.gy = !1
                }
            }, 0)
        },
        Dya = function(a, b) {
            const c = tC(a);
            let d = c.kx;
            d || (d = c.kx = new Cya(a));
            _.mb(c.Rh || [], _.Jj);
            var e = c.ij = c.ij || new _.hsa;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.XD = c.XD || new sC(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.am(d.Eh);
            c.Rh = [_.Hj(a, "panes_changed", e), _.Hj(f, "zoom_changed", e), _.Hj(f, "offset_changed", e), _.Hj(b, "projection_changed", e), _.Hj(f, "projectioncenterq_changed", e)];
            _.am(d.Eh);
            b instanceof _.ck ? (_.Dk(b, "Ox"), _.L(b, 148440)) : b instanceof _.Uk && (_.Dk(b, "Oxs"),
                _.L(b, 181451))
        },
        Iya = function(a) {
            if (a) {
                var b = a.getMap();
                if (Eya(a) !== b && b && b instanceof _.ck) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Fya(b, a, c.overlayLayer) : c.Fg.then(({
                        kh: d
                    }) => {
                        const e = new Gya(b, d);
                        d.Ci(e);
                        c.overlayLayer = e;
                        Hya(a);
                        Iya(a)
                    })
                }
            }
        },
        Hya = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Eg.unbindAll(), b.Eg.set("panes", null), b.Eg.set("projection", null), b.Hg.Dl(b), b.Fg && (b.Fg = !1, b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()))
            }
        },
        Eya = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Jya = function(a,
            b) {
            a.Eg.get("projection") != b && (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b))
        };
    _.xa(sC, _.Xj);
    sC.prototype.changed = function(a) {
        a != "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Ni(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Eg : null))
    };
    var uC = {};
    _.xa(Cya, _.Xj);
    uC.Il = function(a) {
        if (a) {
            var b = a.getMap();
            (tC(a).DD || null) !== b && (b && Dya(a, b), tC(a).DD = b)
        }
    };
    uC.Dl = function(a) {
        const b = tC(a);
        var c = b.ij;
        c && c.unbindAll();
        (c = b.XD) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Rh && _.mb(b.Rh, _.Jj);
        b.Rh = null;
        b.kx && (b.kx.Eh.Gj(), b.kx = null);
        delete tC(a).DD
    };
    var vC = {},
        Fya = class {
            constructor(a, b, c) {
                this.map = a;
                this.Eg = b;
                this.Hg = c;
                this.Fg = !1;
                _.Dk(this.map, "Ox");
                _.L(this.map, 148440);
                c.Il(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.Eg.onAdd && this.Eg.onAdd());
                this.Eg.draw && this.Eg.draw()
            }
        },
        Gya = class {
            constructor(a, b) {
                this.Ig = a;
                this.Hg = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            Zh(a, b, c, d, e, f, g, h) {
                const k = this.Eg = this.Eg || new _.lz(this.Ig, this.Hg, () => {});
                k.Zh(a, b, c, d, e, f, g, h);
                for (const m of this.Fg) Jya(m, k), m.draw()
            }
            Il(a) {
                this.Fg.push(a);
                this.Eg && Jya(a, this.Eg);
                this.Hg.refresh()
            }
            Dl(a) {
                _.zb(this.Fg,
                    a)
            }
        };
    vC.Il = Iya;
    vC.Dl = Hya;
    _.zi("overlay", {
        LB: function(a) {
            if (a) {
                (0, uC.Dl)(a);
                (0, vC.Dl)(a);
                var b = a.getMap();
                b && (b instanceof _.ck ? (0, vC.Il)(a) : (0, uC.Il)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.eu(a, {
                Al: ({
                    event: b
                }) => {
                    _.os(b.Eg)
                },
                fk: b => _.Qt(b),
                pq: b => _.Rt(b),
                el: b => _.Rt(b),
                zk: b => _.St(b)
            }).ds(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.Fj);
            a.addEventListener("contextmenu", _.Fj);
            a.addEventListener("dblclick", _.Fj);
            a.addEventListener("mousedown", _.Fj);
            a.addEventListener("mousemove", _.Fj);
            a.addEventListener("MSPointerDown",
                _.Fj);
            a.addEventListener("pointerdown", _.Fj);
            a.addEventListener("touchstart", _.Fj);
            a.addEventListener("wheel", _.Fj)
        }
    });
});