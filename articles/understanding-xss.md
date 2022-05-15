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

例えば、あるショッピングサイトで、商品を検索したらその検索結果の一覧を表示するような Web ページがあったとします。

[![Image from Gyazo](https://i.gyazo.com/261438cb9abed953cf8ff4e38606bf0d.png)](https://gyazo.com/261438cb9abed953cf8ff4e38606bf0d)

ユーザーが「Cat」と検索した場合は、「http://example.jp/search?item=Cat」という URL でリクエストが送信されます。
サーバー側は、URL の item パラメータで指定された「Cat」という文字列を取得して、次のように HTML の一部に含めてレスポンスを返したとします。

```html
<div>
  検索結果：
  <span>Cat</span>
</div>
```

このとき、「Cat」の代わりに「 `<s>Cat</s>` 」と入力するユーザーがいたら、どうなるでしょうか。

[![Image from Gyazo](https://i.gyazo.com/ef07b11215dc2a7aabe958e36c193317.png)](https://gyazo.com/ef07b11215dc2a7aabe958e36c193317)

サーバ側は HTML を生成する際に「 `<s>Cat</s>` 」という文字列を埋め込んで、レスポンスを渡します。

```html
<div>
  検索結果：
  <span><s>Cat</s></span>
</div>
```

ブラウザは、この HTML を読み込むときに、埋め込まれた文字列を `s` の要素として解釈します。そのため、結果的にユーザーの画面には「Cat」という文字列に取り消し線が引かれた状態で表示されることになります。

この例では、`<s>〜<s>` がほとんど無害なタグであるため、問題は無いように感じるかもしれません。しかし、`<script>〜</script>` を使って悪意のあるスクリプトが埋め込まれた場合、セッションハイジャックや秘密情報が盗まれるなどに被害が発生する可能性があります。

このように、ユーザーが入力した文字列を使って動的に HTML を生成しているような Web サイトは XSS の危険性があると言えます。

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
