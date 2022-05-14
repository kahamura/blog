---
title: "XSSについて理解する"
date: "2022-05-20"
tags: ["Web", "JavaScript"]
image: "https://i.gyazo.com/60cfb89054f448fcc6da2fcfea2abac1.jpg"
---

# XSS とは

**XSS** とは、Cross Site Scripting の略で、Web サイトがユーザーからの入力をそのまま出力するようなセキュリティ上の不備を利用して、サイト間を横断させて悪意のあるプログラムを注入する攻撃のことです。

> クロスサイトスクリプティング (XSS) とは、悪意あるクライアントサイドのコードをウェブサイトに挿入するセキュリティ攻撃です。挿入されたコードは被害者のブラウザー上で実行され、アクセス制限の回避やユーザーへのなりすましなどにつながります。
>
> [MDN - Cross-site scripting](https://developer.mozilla.org/ja/docs/Glossary/Cross-site_scripting)

例えば、ショッピングサイトで、商品を検索したらその検索結果の一覧を表示するような Web ページがあったとします。

[![Image from Gyazo](https://i.gyazo.com/261438cb9abed953cf8ff4e38606bf0d.png)](https://gyazo.com/261438cb9abed953cf8ff4e38606bf0d)

ユーザーが「Cat」と検索した場合は「http://example.jp/search?item=Cat」というURLでリクエストが飛ばされます。
そしてレスポンスが返されると、検索結果の画面には「検索結果：Cat」という文字が出力されるようになっています。

このとき、ユーザーによって検索された文字列を適切にエスケープせずに、HTML としてそのまま表示するような仕組みであった場合、どうなるでしょうか。

[![Image from Gyazo](https://i.gyazo.com/ef07b11215dc2a7aabe958e36c193317.png)](https://gyazo.com/ef07b11215dc2a7aabe958e36c193317)

例えば、「Cat」と入力する代わりに「 `<h1>Cat</h1>` 」と入力するユーザーがいるとします。

この場合、ブラウザは `<` や`>` という文字を「HTML のタグ」として認識するため、結果として画面には `h1` の要素として Cat という文字が表示されることになります。

このような、入力値が HTML タグとして認識される Web サイトは、XSS の危険性があります。

では、XSS とは具体的にどのような攻撃手法なのでしょうか。

# XSS の種類

実は、XSS には次のような 3 つのタイプがあります。

- 反射型 XSS（Reflected XSS）
- 格納型 XSS（Stored XSS）
- DOM ベースの XSS（DOM Based XSS）

まず、最も一般的なタイプである反射型 XSS から見ていきたいと思います。

# 反射型 XSS とは

# 格納型 XSS とは

# DOM ベースの XSS とは
