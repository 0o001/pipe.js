# pipe.js
```js

function x(c) { c = c + 2; return c }
function b(x, x2) { console.log(x, x2) }
(12).pipe(x).pipe(console.log).pipe(x).pipe(console.log).pipe(b, ["qq"])
"merhaba".pipe(b).substr(2).pipe(console.log)


```
