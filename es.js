(
    {
        help: (c) => {
            switch (c) {
                case "afor":
                    console.log("配列の要素数だけループする処理を少しスマートに。")
                    console.log('es.afor([4,5,6],(v,i,a,m,p)=>{console.log([v,i,a,m,p])});')
                    break;
                case "ofor":
                    console.log("aforと同じようにオブジェクトをループ")
                    console.log('es.ofor({one:1,two:2,three:3},(v,i,a,m,p)=>{console.log([v,i,a,m,p])});')
                    break;
                case "rep":
                    console.log("任意の回数だけループ")
                    console.log('es.rep(10,(i,m,p)=>{console.log([i,m,p])});')
                    break;
                case "gkey":
                    console.log("連想配列を含む配列から特定のキーを抽出し配列化。3番目は詰めるかどうか")
                    console.log('console.log(es.gkey([{a:7,b:1},{b:2},{a:9,c:1}],"a",true));')
                    break;
                case "sum":
                    console.log("配列の合計値を取得")
                    console.log('console.log(es.sum([1,2,3,4,5,6,7,8,9]));')
                    break;
                case "avr":
                    console.log("配列の平均値を取得")
                    console.log('console.log(es.avr([1,2,3,4,5,6,7,8,9]));')
                    break;
                default:
                    console.log('es.help("COMMAND")');
                    break;
            }

        },

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

        gkey: (a, k, p) => {
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
    }
)



//e$.afor([4,5,6],(v,i,a,m,p)=>{console.log([v,i,a,m,p])});
//e$.ofor({one:1,two:2,three:3},(v,i,a,m,p)=>{console.log([v,i,a,m,p])});
//e$.rep(10,(i,m,p)=>{console.log([i,m,p])});
//console.log(e$.gkey([{a:7,b:1},{b:2},{a:9,c:1}],"a",true))
//console.log(e$.sum([1,2,3,4,5,6,7,8,9]));
//console.log(e$.avr([1,2,3,4,5,6,7,8,9]));