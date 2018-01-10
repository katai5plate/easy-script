# easy-script
自分用に使いやすくしたJavaScript<br>
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
sw(
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
配列 = es.gclm([{},{}...],キー名,詰めるならtrue));
```

### 演算
- 主に計算に使う
#### es.math.sum
- 配列の合計値を取得
```js
値 = es.sum(配列));
```

#### .avr
- 配列の平均値を取得
```js
値 = es.avr(配列));
```
