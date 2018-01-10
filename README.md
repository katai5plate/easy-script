# easy-script
自分用にJavaScriptを使いやすくしてみた<br>
主にChrome上で動かす用

## インポート
### Chromeのコンソールで実行する場合
```js
let e$res=await fetch("https://raw.githubusercontent.com/katai5plate/easy-script/master/es.js"),e$scr=await e$res.text(),e$clip={};eval("e$clip="+e$scr);const es=e$clip;
```

## リファレンス
### 基本メソッド
#### es.afor
- 配列の要素数だけループ
```js
es.afor(配列,(値,index,配列,長さ,完了率)=>{処理});
```
#### es.ofor
- 連想配列のキー数だけループ
```js
es.ofor(連想配列,(値,キー名,連想配列,長さ,完了率)=>{処理});
```

#### es.rep
- 任意の回数だけループ
```js
es.rep(回数,(index,回数,完了率)=>{処理});
```

#### es.sw
- 関数で記述するタイプのスイッチ文
- 共通ヘッダ処理->ケースor例外処理->共通フッタ処理 の順に処理
```js
es.sw(
    比較式,
    [
        {case:ケースA,result:(比較式の結果)=>{結果の処理}},
        {case:ケースB,result:(比較式の結果)=>{結果の処理}},
         :
    ],
    (比較式の結果)=>{例外処理},
    (比較式の結果)=>{共通ヘッダ処理},
    (比較式の結果)=>{共通フッタ処理}
)
```

### セル
- [{},{}...]のような形をしている「連想配列の配列」を扱う
#### es.cell.gclm
- 連想配列の配列から特定のキーを抽出し配列化
```js
配列 = es.cell.gclm([{},{}...],キー名,詰めるならtrue);
```

### JSON
- JSONを扱う
#### es.json.enc
- 変数をJSON文字列化する
- 関数は無視される
```js
文字列 = es.json.enc(変数);
```

#### es.json.dec
- JSON文字列を変数化する
```js
変数 = es.json.dec(文字列);
```

### 演算
- 主に計算に使う
#### es.math.sum
- 配列の合計値を取得
```js
値 = es.math.sum(配列);
```

#### es.math.avr
- 配列の平均値を取得
```js
値 = es.math.avr(配列);
```

### 文字列操作
- 主に文字列を扱う
#### es.str.cut
- 文字列を文字数で区切る
```js
文字列 = es.math.cut(文字列,文字数,区切りに追加する文字列);
```

#### es.str.pad
- 値の左端を特定の文字列で埋めた文字列を作る
```js
文字列 = es.math.pad(値,埋める文字列,出力文字列の長さ);
```
1. ゼロ埋めをする場合
```js
文字列 = es.math.pad(5,"00000",3); // <- "005"
```
2. 任意の文字列で埋める場合
```js
文字列 = es.math.pad("OH","_/~|`",5); // <- "~|`OH"
```

### ツール
- 便利な機能を持つメソッド
#### es.api.DL
- URL先のものをダウンロード
- ダウンロード名指定は、たまにうまくいかない
```js
es.api.DL(URL,DL名);
```

#### es.api.cps
- クリップボードに文字列をコピー
- これもたまにうまくいかないときがある
```js
es.api.cps(文字列);
```

#### es.api.F5
- ページを更新する
```js
es.api.F5();
es.api.F5(スーパーリロードするならtrue);
```

#### es.api.sss
- セッションを操作する
1. セッションを設定する
```js
es.api.sss("set",キー名,値);
```
2. セッションを取得する
```js
値 = es.api.sss("get",キー名);
```
3. セッションを削除する
```js
es.api.sss("del",キー名);
```
4. 全セッションを抹消する
```js
es.api.sss("clear");
```
5. セッションストレージを取得する
```js
変数 = es.api.sss();
```
