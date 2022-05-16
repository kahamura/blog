---
title: "XSSについて理解する"
date: "2022-05-20"
tags: ["Web", "JavaScript"]
image: "https://i.gyazo.com/60cfb89054f448fcc6da2fcfea2abac1.jpg"
---

# XSS とは

**XSS** とは、Cross Site Scripting の略で、Web サイトでユーザーからの入力をそのまま出力するようなセキュリティ上の不備があった場合、攻撃者がそれを利用して悪意のあるスクリプトを挿入する攻撃のことです。

> クロスサイトスクリプティング (XSS) とは、悪意あるクライアントサイドのコードをウェブサイトに挿入するセキュリティ攻撃です。挿入されたコードは被害者のブラウザー上で実行され、アクセス制限の回避やユーザーへのなりすましなどにつながります。
>
> [MDN - Cross-site scripting](https://developer.mozilla.org/ja/docs/Glossary/Cross-site_scripting)

例えば、あるショッピングサイトで、商品を検索したらその検索結果の一覧を表示するような Web ページがあったとします。

[![Image from Gyazo](https://i.gyazo.com/261438cb9abed953cf8ff4e38606bf0d.png)](https://gyazo.com/261438cb9abed953cf8ff4e38606bf0d)

ユーザーが「Cat」と検索した場合は、「http://example.jp/search?item=Cat」という URL でリクエストが送信されます。
サーバー側は、検索結果の HTML を生成するときに URL の item パラメータで指定された文字列「Cat」を取得して、次のように HTML 内に埋め込みます。

```html
<div>
  検索結果：
  <span>Cat</span>
</div>
```

このとき、埋め込んだ文字列が適切にエスケープされていなかった場合，どうなるでしょうか。

[![Image from Gyazo](https://i.gyazo.com/ef07b11215dc2a7aabe958e36c193317.png)](https://gyazo.com/ef07b11215dc2a7aabe958e36c193317)
