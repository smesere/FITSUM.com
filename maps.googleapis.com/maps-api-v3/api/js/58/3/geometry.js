google.maps.__gjsload__('geometry', function(_) {
    var ksa = function(a, b) {
            return Math.abs(_.Ki(b - a, -180, 180))
        },
        lsa = function(a, b, c, d, e) {
            if (!d) {
                c = ksa(a.lng(), c) / ksa(a.lng(), b.lng());
                if (!e) return e = Math.sin(_.Df(a.lat())), e = Math.log((1 + e) / (1 - e)) / 2, b = Math.sin(_.Df(b.lat())), _.Ef(2 * Math.atan(Math.exp(e + c * (Math.log((1 + b) / (1 - b)) / 2 - e))) - Math.PI / 2);
                a = e.fromLatLngToPoint(a);
                b = e.fromLatLngToPoint(b);
                return e.fromPointToLatLng(new _.Kk(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y))).lat()
            }
            e = _.Df(a.lat());
            a = _.Df(a.lng());
            d = _.Df(b.lat());
            b = _.Df(b.lng());
            c = _.Df(c);
            return _.Ki(_.Ef(Math.atan2(Math.sin(e) *
                Math.cos(d) * Math.sin(c - b) - Math.sin(d) * Math.cos(e) * Math.sin(c - a), Math.cos(e) * Math.cos(d) * Math.sin(a - b))), -90, 90)
        },
        msa = function(a, b) {
            a = new _.tj(a, !1);
            b = new _.tj(b, !1);
            return a.equals(b)
        },
        nsa = function(a, b) {
            const c = [];
            let d = [0, 0],
                e;
            for (let f = 0, g = _.Gi(a); f < g; ++f) e = b ? b(a[f]) : a[f], eA.VD(e[0] - d[0], c), eA.VD(e[1] - d[1], c), d = e;
            return c.join("")
        },
        fA = {
            containsLocation: function(a, b) {
                a = _.xj(a);
                const c = _.Ki(a.lng(), -180, 180),
                    d = !!b.get("geodesic"),
                    e = b.get("latLngs");
                var f = b.get("map");
                f = !d && f ? f.getProjection() : null;
                let g = !1;
                for (let k = 0, m = e.getLength(); k < m; ++k) {
                    const p = e.getAt(k);
                    for (let t = 0, u = p.getLength(); t < u; ++t) {
                        const w = p.getAt(t),
                            x = p.getAt((t + 1) % u);
                        var h = _.Ki(w.lng(), -180, 180);
                        const z = _.Ki(x.lng(), -180, 180),
                            B = Math.max(h, z);
                        h = Math.min(h, z);
                        (B - h > 180 ? c >= B || c < h : c < B && c >= h) && lsa(w, x, c, d, f) < a.lat() && (g = !g)
                    }
                }
                return g || fA.isLocationOnEdge(a, b)
            }
        };
    _.va("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.containsLocation", fA.containsLocation);
    fA.isLocationOnEdge = function(a, b, c) {
        a = _.xj(a);
        c = c || 1E-9;
        const d = _.Ki(a.lng(), -180, 180),
            e = b instanceof _.Xm,
            f = !!b.get("geodesic"),
            g = b.get("latLngs");
        b = b.get("map");
        b = !f && b ? b.getProjection() : null;
        for (let t = 0, u = g.getLength(); t < u; ++t) {
            const w = g.getAt(t),
                x = w.getLength(),
                z = e ? x : x - 1;
            for (let B = 0; B < z; ++B) {
                var h = w.getAt(B);
                const C = w.getAt((B + 1) % x);
                if (msa(h, a) || msa(C, a)) return !0;
                var k = _.Ki(h.lng(), -180, 180),
                    m = _.Ki(C.lng(), -180, 180);
                const F = Math.max(k, m),
                    J = Math.min(k, m);
                if (k = Math.abs(_.Ki(k - m, -180, 180)) <= 1E-9 &&
                    (Math.abs(_.Ki(k - d, -180, 180)) <= c || Math.abs(_.Ki(m - d, -180, 180)) <= c)) {
                    k = a.lat();
                    m = Math.min(h.lat(), C.lat()) - c;
                    var p = Math.max(h.lat(), C.lat()) + c;
                    k = k >= m && k <= p
                }
                if (k) return !0;
                if (F - J > 180 ? d + c >= F || d - c <= J : d + c >= J && d - c <= F)
                    if (h = lsa(h, C, d, f, b), Math.abs(h - a.lat()) < c) return !0
            }
        }
        return !1
    };
    _.va("module$exports$mapsapi$geometry$polyGeometry.PolyGeometry.isLocationOnEdge", fA.isLocationOnEdge);
    var eA = {
        decodePath: function(a) {
            const b = _.Gi(a),
                c = Array(Math.floor(a.length / 2));
            let d = 0,
                e = 0,
                f = 0,
                g;
            for (g = 0; d < b; ++g) {
                let h = 1,
                    k = 0,
                    m;
                do m = a.charCodeAt(d++) - 63 - 1, h += m << k, k += 5; while (m >= 31);
                e += h & 1 ? ~(h >> 1) : h >> 1;
                h = 1;
                k = 0;
                do m = a.charCodeAt(d++) - 63 - 1, h += m << k, k += 5; while (m >= 31);
                f += h & 1 ? ~(h >> 1) : h >> 1;
                c[g] = new _.tj(e * 1E-5, f * 1E-5, !0)
            }
            c.length = g;
            return c
        }
    };
    _.va("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.decodePath", eA.decodePath);
    eA.encodePath = function(a) {
        a instanceof _.Dl && (a = a.getArray());
        a = (0, _.gk)(a);
        return nsa(a, function(b) {
            return [Math.round(b.lat() * 1E5), Math.round(b.lng() * 1E5)]
        })
    };
    _.va("module$exports$mapsapi$poly$polylineCodec.PolylineCodec.encodePath", eA.encodePath);
    eA.VD = function(a, b) {
        for (a = a < 0 ? ~(a << 1) : a << 1; a >= 32;) b.push(String.fromCharCode((32 | a & 31) + 63)), a >>= 5;
        b.push(String.fromCharCode(a + 63))
    };
    var osa = {
        encoding: eA,
        spherical: _.ep,
        poly: fA
    };
    _.ka.google.maps.geometry = osa;
    _.zi("geometry", osa);
});