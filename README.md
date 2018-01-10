# easy-script
自分用に使いやすくしたJavaScript<br>
主にChrome上で動かす用

## インポート
### Chromeのコンソールで実行する場合
```js
let e$res=await fetch("https://raw.githubusercontent.com/katai5plate/easy-script/master/es.js"),e$scr=await e$res.text(),e$clip={};eval("e$clip="+e$scr);const es=e$clip;
```