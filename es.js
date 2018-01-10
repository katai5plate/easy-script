(
    {
        // 配列の要素数だけループする処理を少しスマートに。
        /* e$.afor([array],(value,index,array,max,per)=>{}) */
        afor: (a, f) => {
            for (let i = 0; i < a.length; i++) {
                f(a[i], i, a, a.length, (i + 1) / a.length);
            }
        },

        // aforと同じようにオブジェクトをループ
        /* e$.ofor({object},(value,index,array,max,per)=>{}) */
        ofor: (o, f) => {
            let i = 0;
            Object.keys(o).forEach(k => {
                f(o[k], k, o, keys(o).length, (i + 1) / keys(o).length);
                i++;
            });
        },

        // 任意の回数だけループ
        /* e$.rep(count,(index,max,per)=>{}) */
        rep: (c, f) => {
            for (let i = 0; i < c; i++) f(i, c, (i + 1) / c);
        },

        //連想配列を含む配列から特定のキーを抽出し配列化
        /* e$.gkey([{},{}...],key,Pack?) */
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

        //配列の合計値を取得
        sum: (a) => {
            let r = 0;
            for (let i = 0; i < a.length; i++) {
                r += a[i];
            }
            return r;
        },

        //配列の平均値を取得
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