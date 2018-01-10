(
    {
        afor: (a, f) => {
            for (let i = 0; i < a.length; i++) {
                f(a[i], i, a, a.length, (i + 1) / a.length);
            }
        },

        ofor: (o, f) => {
            let i = 0;
            Object.keys(o).forEach(k => {
                f(o[k], k, o, keys(o).length, (i + 1) / keys(o).length);
                i++;
            });
        },

        rep: (c, f) => {
            for (let i = 0; i < c; i++) f(i, c, (i + 1) / c);
        },

        sw : (n,c,d,h,f)=>{
            for(let i = 0;i<c.length;i++){
                if(n==c[i].case){
                    h(n); c[i].result(n); f(n);
                    return true;
                }
            }
            h(n); d(n); f(n);
            return false
        },

        // [{},{}...]となっているものを扱う区分
        cell: {
            gclm: (a, k, p) => {
                let r = [];
                for (let i in a) {
                    if (p) {
                        if (!!a[i][k]) r.push(a[i][k]);
                    } else {
                        r.push(a[i][k]);
                    }
                }
                return r;
            },
        },

        // 計算関係を扱う区分
        math: {
            sum: (a) => {
                let r = 0;
                for (let i = 0; i < a.length; i++) {
                    r += a[i];
                }
                return r;
            },
    
            avr: (a) => {
                let r = 0;
                for (let i = 0; i < a.length; i++) {
                    r += a[i];
                }
                return r /= a.length;
            },
        },
        
    }
)