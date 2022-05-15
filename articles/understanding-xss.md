---
title: "XSSについて理解する"
date: "2022-05-20"
tags: ["Web", "JavaScript"]
image: "https://i.gyazo.com/60cfb89054f448fcc6da2fcfea2abac1.jpg"
---

# XSS とは

**XSS** とは、Cross Site Scripting の略で、Web サイトがユーザーからの入力をそのまま出力するようなセキュリティ上の不備があった場合、攻撃者がそれを利用して悪意のあるスクリプトを挿入する攻撃のことです。

> クロスサイトスクリプティング (XSS) とは、悪意あるクライアントサイドのコードをウェブサイトに挿入するセキュリティ攻撃です。挿入されたコードは被害者のブラウザー上で実行され、アクセス制限の回避やユーザーへのなりすましなどにつながります。
>
> [MDN - Cross-site scripting](https://developer.mozilla.org/ja/docs/Glossary/Cross-site_scripting)

例えば、ショッピングサイトで、商品を検索したらその検索結果の一覧を表示するような Web ページがあったとします。

[![Image from Gyazo](https://i.gyazo.com/261438cb9abed953cf8ff4e38606bf0d.png)](https://gyazo.com/261438cb9abed953cf8ff4e38606bf0d)

ユーザーが「Cat」と検索した場合は、「http://example.jp/search?item=Cat」という URL でリクエストが送信されます。
サーバー側は、URL の item パラメータで指定された「Cat」という文字列を取得して、次のように HTML の一部にそのまま含めてレスポンスを返します。

```html
<div>
  検索結果：
  <span>Cat</span>
</div>
```

このとき、「Cat」の代わりに「 `<h1>Cat</h1>` 」と入力して検索するユーザーがいたら、どうなるでしょうか。

[![Image from Gyazo](https://i.gyazo.com/ef07b11215dc2a7aabe958e36c193317.png)](https://gyazo.com/ef07b11215dc2a7aabe958e36c193317)

サーバ側は、生成する HTML に、入力された文字列「 `<h1>Cat</h1>` 」を埋め込んで、レスポンスとして返します。

```html
<div>
  検索結果：
  <span><h1>Cat</h1></span>
</div>
```

ブラウザは、HTML を読み取るときに「 `<h1>Cat</h1>` 」の中にある `<` や`>` という文字を「HTML のタグ」として解釈することになるため、結果としてユーザーの画面には「Cat」という文字列が `h1` の要素で表示されることになります。

このような Web サイトは、XSS の脆弱性がある恐れがあります。

# XSS の種類

では、XSS とは具体的にどのような攻撃手法なのでしょうか？
実は、XSS には次のような 3 つのタイプがあります。

- 反射型 XSS（Reflected XSS）
- 格納型 XSS（Stored XSS）
- DOM ベースの XSS（DOM Based XSS）

まず、最も一般的なタイプである反射型 XSS から見ていきたいと思います。

# 反射型 XSS とは

# 格納型 XSS とは

# DOM ベースの XSS とは
