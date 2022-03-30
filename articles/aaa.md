---
title: "テスト記事です"
date: "2022-04-01"
tags: ["test"]
---

```ts
async function foo(): Promise<boolean> {
  return false;
}

async function bar(): Promise<string> {
  if (foo()) {
    return "true";
  }
  return "false";
}
```

```js
function alert() {
  console.log(this.name + " is calling");
}
```

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter();
shape.perimeter();
```
