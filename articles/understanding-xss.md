---
title: "XSSについて理解する"
date: "2022-05-20"
tags: ["Web", "JavaScript"]
image: "https://i.gyazo.com/60cfb89054f448fcc6da2fcfea2abac1.jpg"
---

# XSS とは

**XSS** とは、Cross Site Scripting の略で、Web サイトがユーザーからの入力をそのまま出力するといったセキュリティ上の不備を利用して、サイト間を横断させて悪意のあるプログラムを挿入する攻撃のことです。

> クロスサイトスクリプティング (XSS) とは、悪意あるクライアントサイドのコードをウェブサイトに挿入するセキュリティ攻撃です。挿入されたコードは被害者のブラウザー上で実行され、アクセス制限の回避やユーザーへのなりすましなどにつながります。
>
> [MDN - Cross-site scripting](https://developer.mozilla.org/ja/docs/Glossary/Cross-site_scripting)

[IPA](https://www.ipa.go.jp/files/000024726.pdf) によると、XSS は以下の 3 つの種類に分類されます。

- 反射型 XSS（Reflected XSS）
- 格納型 XSS（Stored XSS）
- DOM ベースの XSS（DOM Based XSS）
