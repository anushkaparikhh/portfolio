function Ht(P, b, x) {
    let I;
    return kt( () => {
        const o = document.getElementById("mossCanvas");
        console.log(o);
        const e = o.getContext("2d")
          , h = 5
          , L = .001;
        o.width = window.innerWidth,
        o.height = window.innerHeight;
        const W = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, -1], [-1, 1], [1, 1]];
        let d = [];
        const N = ["#7AA039", "#A1B340", "#B2DC50"];
        function D() {
            const i = Math.floor(o.width / h)
              , n = Math.floor(o.height / h);
            for (let c = 0; c < n; c++) {
                d[c] = [];
                for (let R = 0; R < i; R++)
                    d[c][R] = !1
            }
        }
        function A(i, n) {
            const c = N[Math.floor(Math.random() * N.length)];
            e.fillStyle = c,
            e.fillRect(i * h, n * h, h, h),
            n < d.length && i < d[0].length && (d[n][i] = !0)
        }
        let p = [];
        function z() {
            const i = [];
            p.forEach(n => {
                W.forEach( ([c,R]) => {
                    const y = n.x + c
                      , M = n.y + R;
                    M < d.length && y < d[0].length && y >= 0 && y < o.width / h && M >= 0 && M < o.height / h && !d[M][y] && Math.random() < L && (A(y, M),
                    i.push({
                        x: y,
                        y: M
                    }))
                }
                )
            }
            ),
            p.push(...i)
        }
        window.addEventListener("mousemove", function(i) {
            const n = Math.floor(i.clientX / h)
              , c = Math.floor(i.clientY / h);
            d[c][n] || (A(n, c),
            p.push({
                x: n,
                y: c
            }))
        }),
        window.addEventListener("click", function(i) {
            const n = Math.floor(i.clientX / h)
              , c = Math.floor(i.clientY / h);
            d[c][n] || (A(n, c),
            p.push({
                x: n,
                y: c
            }))
        });
        function T() {
            const i = Math.floor(Math.random() * (o.width / h))
              , n = Math.floor(Math.random() * (o.height / h));
            n < d.length && i < d[0].length && (d[n][i] || (A(i, n),
            p.push({
                x: i,
                y: n
            })))
        }
        function O() {
            z(),
            Math.floor(Math.random() * 200) == 42 && T(),
            requestAnimationFrame(O)
        }
        x(0, I = () => {
            e.clearRect(0, 0, o.width, o.height),
            p = [],
            D()
        }
        ),
        D(),
        O()
    }
    ),
    [I]
}
