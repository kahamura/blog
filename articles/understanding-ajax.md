---
title: "Ajaxについて理解する"
date: "2022-04-24"
tags: ["Web", "JavaScript"]
---

# Ajax の登場背景

## JavaScript の誕生

Web は、1989 年にスイスのジュネーブにある CERN（欧州原子核研究機構） に所属していた **Tim Berners-Lee** 氏によって考案されました。

当時の CERN にはたくさんの研究者が在籍しており、膨大な数の論文やデータを簡単に共有できるような仕組みが必要でした。そこで、ソフトウェアの技術者として CERN に在籍していた Tim Berners-Lee 氏は、論文などの文書を相互に結びつける仕組みとして「World Wide Web」を考案し、1991 年 には世界初となる [Web サイト](http://info.cern.ch/hypertext/WWW/TheProject.html) を公開しました。

1990 年代前半の Web は、HTML と CSS で記述された、いわゆる静的な Web ページがほとんどでした。しかし、静的な Web ページでは出来ることが限られていたため、次第に Web サイトを動的にしたいというニーズが高まってきました。

そして、そのニーズに応えるために登場したのが Java Applet や JavaScript といった技術です。

Java Applet は、ネットワーク経由でブラウザに読み込まれて実行される Java のアプリケーションの一種です。1996 年に Netscape Navigator 2.0 に搭載されたことで普及しましたが、Java Applet を組み込んだ Web サイトは動作が重くなりがちだったため、次第に利用されなくなりました。

そして JavaScript は、Netscape Communications 社の **Brendan Eich** 氏によって開発されたプログラミング言語です。JavaScript は、1995 年に自社のブラウザである Netscape Navigator 2.0 に実装されました。

当時、Netscape Communications 社のライバルだった Microsoft 社は、シェア争いで引き離されてしまわないように、すぐに Javascript を自社のブラウザである Internet Exproler に組み込もうとしました。しかし、Netscape Communications 社 は自社の優位性を保つために、ライセンスの供与を認めませんでした。その結果、Microsoft 社は Javascript に似た「**JScript**」という言語を自社で開発し、1996 年に Internet Explorer 3.0 に組み込みました。

JavaScript と JScript はよく似ており、それなりに互換性もありましたが、お互いがシェア獲得のために独自に機能を開発していったため、どちらのブラウザでも動作するようなコードを書くことは困難でした。そのため JavaScript は「使い勝手が悪いプログラミング言語」というイメージが生まれてしまいました。

## JavaScript 軽視の時代

1990 年代後半からは、インターネットの普及に伴い、個人で Web サイトを制作する人が増加しました。当時の人々は、かっこいい Web サイトを作成するために、無駄にカーソルの軌跡を星でキラキラさせたり、文字の大きさを変化させたりなどのテクニックのために JavaScript を利用しました。その結果、センスが悪くゴテゴテしたページが多く誕生し、JavaScript は素人が使うプログラミング言語というイメージが染みついてしまいました。

また、当時は JavaScript はセキュリティ的に危ない という意見が多く、ブラウザの設定で JavaScript を OFF にしてネットサーフィンをするのが、IT リテラシーが高い人という印象がありました。そのため、サイトによっては『当サイトを閲覧するには JavaScript を ON にしてください』といった注意書きもしばしば見かけました。

## JavaScript の復権

先述したとおり、JavaScript と JScript はそれぞれの仕様が微妙に異なっていたため互換性の問題がありましたが、それがますます深刻化するようになりました。そのため、1997 年からはヨーロッパの通信の標準化の団体である「Ecma International」によって標準化が成され、各ブラウザでは「ECMAScript」という仕様に準拠して実装が進められるようになりました。

そして 2000 年代中盤で、JavaScript は再び注目を集めるようになりました。そのきっかけになったのが、2005 年に Jesse James Garrett 氏によって発表された「[Ajax: A New Approach to Web Applications](https://web.archive.org/web/20051124064232/http://www.adaptivepath.com/publications/essays/archives/000385.php)」という記事です。Jesse James Garrett 氏は、この記事の中で、当時 Google Maps や Google Suggest で使用されていた技術を分析し、その技術をまとめて「**Ajax**」と名付けました。

では、「Ajax」とは具体的にどういうものなのでしょうか。次の章からは、Ajax の定義などについて詳しく見ていきたいと思います。

# Ajax の定義

Ajax は「Asynchronous JavaScript + XML」の略です。直訳すると「非同期の JavaScript と XML」という意味になります。

Jesse James Garrett 氏は、記事の中で、Ajax を構成する技術として次のようなものを挙げました。

> - standards-based presentation using XHTML and CSS;
> - dynamic display and interaction using the Document Object Model;
> - data interchange and manipulation using XML and XSLT;
> - asynchronous data retrieval using XMLHttpRequest;
> - and JavaScript binding everything together.

上記を日本語訳すると、次のような意味になります。

> - XHTML と CSS を使った 標準規格に基づく表現
> - Document Object Model を使った動的な表示と相互のやりとり
> - XML と XSLT を使ったデータ交換とデータ操作
> - XMLHttpRequest を使った非同期的なデータ取得
> - そして、これらを全て結びつける JavaScript

これらの技術は、当時新しく登場した技術というわけではなく、いずれも記事が出る前から存在する技術でした。Jesse James Garrett 氏は、これらの既存技術を組み合わせた新しい方法として「Ajax」という言葉を造り出したのです。そのため、世間では Ajax は「新しくて古い技術」と呼ばれたりもします。

ところで、彼はなぜ Ajax という言葉を造り出したのでしょうか。その答えは、[記事](https://web.archive.org/web/20051124064232/http://www.adaptivepath.com/publications/essays/archives/000385.php)の最後にある Q&A のセクションの中にあります。次の引用の通り、彼は顧客と話すときに毎回 "Asynchronous JavaScript + CSS + DOM + XMLHttpRequest" と長々と言うのが面倒だったようです。

> Q. Why did you feel the need to give this a name?
>
> A. I needed something shorter than “Asynchronous JavaScript+CSS+DOM+XMLHttpRequest” to use when discussing this approach with clients.

また、アメリカでは元々「[AJAX](<https://en.wikipedia.org/wiki/Ajax_(cleaning_product)>)」という食器用洗剤が販売されており、恐らくそこからもじったものではないかと考えられています。

> Ajax も“非同期の JavaScript と XML”などともっともらしい名称の頭文字を取ったように見えるが、真相は「あの洗剤のブランド名でピッタリいける！」ということで、名付けられたのだろう。
>
> 引用: [Ajax の“彗星”とともに現われたチャットサービス“Lingr”を使ってみた](https://ascii.jp/elem/000/000/355/355253/)

# Ajax を構成する技術

話を元に戻しますが、先ほども述べたとおり Ajax は 5 つの技術で構成されます。

> - standards-based presentation using XHTML and CSS;
> - dynamic display and interaction using the **Document Object Model**;
> - data interchange and manipulation using **XML** and XSLT;
> - **asynchronous** data retrieval using **XMLHttpRequest**;
> - and JavaScript binding everything together.

この内、Ajax と特に密接な関係を持つキーワードとして、「**asynchronous**」「**XML**」「**XMLHttpRequest**」「**Document Object Model**」が挙げられます。これらのキーワードは、それぞれどのような意味なのでしょうか？

## 非同期通信とは

まずは、Ajax の頭文字「A」の部分である Asynchronous の意味について理解していきたいと思います。

Asynchronous とは、直訳すると「非同期の」という意味で、通信を行う機器間でタイミングを合わせずに通信や処理を行う方式のことを指します。

> 非同期とは、複数の主体がタイミングを合わせずに通信や処理を行う方式。
>
> 引用: [IT 用語辞典 -非同期 【asynchronous】](https://e-words.jp/w/%E9%9D%9E%E5%90%8C%E6%9C%9F.html)

実は、通信の種類には「同期」と「非同期」の 2 種類があります。Ajax が登場する以前までは、同期通信が主な通信方式でした。

同期通信では、ブラウザからサーバーに対してリクエストを送信すると、サーバーはレスポンスとして、画面全体の HTML を送り返します。

![](https://storage.googleapis.com/zenn-user-upload/382b22ba0d30-20220429.png)

レスポンスを受け取ったら、ブラウザは HTML を読み込んで、画面全体を書き換えます。ブラウザは、通信を開始してから画面が描画されるまで、他の処理を行うことは一切できません。ユーザーにとっては、いったん画面が真っ白になったあとに、Web ページの描画が終わるまで待たなければならないので、不快感を覚えます。

一方、非同期通信の場合は、サーバーとのやり取りが終わっていなくても、ユーザーは画面の他の UI を操作することが可能になります。

![](https://storage.googleapis.com/zenn-user-upload/8dd7db55d8a3-20220429.png)

非同期通信を利用すると、クライアントはサーバーに対して "必要なデータ" のみをリクエストすることになります。この "必要なデータ" というのは、例えば EC サイトで言うと、表示されている全商品のうちの新作アイテムだけ、などの画面の更新に必要な一部のデータのことです。

ブラウザは、レスポンスを受け取ったら、その Web ページの一部分だけを書き換えます。そのため、とくに UI の変更がない部分は操作可能なまま残されることになるので、ユーザーにとっては操作の継続が可能で、待ち時間も少ないように感じることができます。

[記事](https://web.archive.org/web/20051124064232/http://www.adaptivepath.com/publications/essays/archives/000385.php)の中では、Jesse James Garrett 氏は Google Maps を使って次のように説明していました。

> Now look at Google Maps. Zoom in. Use your cursor to grab the map and scroll around a bit. Again, everything happens almost instantly, with no waiting for pages to reload.
>
> （訳）今度は Google Maps 見てみましょう。ズームインします。カーソルを使って地図をつかみ、少しスクロールしてみましょう。ここでも、ページの再読み込みの待ち時間がなく、すべてがほぼ瞬時に行われます。

従来の地図アプリでは、今見ている地点から隣の地点に移動したい場合は、矢印ボタンをクリックするなどの操作が必要でした。そして、ボタンをクリックすると、地図が一瞬真っ白になって目的の場所が表示されるような仕組みでした。

![](https://image.itmedia.co.jp/ait/articles/0708/23/r20imasara03_01.gif)

（昔の [Yahoo! 地図情](https://map.yahoo.co.jp/)）

引用元: [https://atmarkit.itmedia.co.jp/ait/articles/0708/23/news134_2.html](https://atmarkit.itmedia.co.jp/ait/articles/0708/23/news134_2.html)

しかし、当時紹介された Google Maps では、カーソルを使って地図をつかみ、少しスクロールするだけで地図を移動することできました。そして、リクエストとレスポンスによって画面全体の書き換えが発生しないという、非常に画期的なものでした。

![](https://storage.googleapis.com/zenn-user-upload/eb4c2523d030-20220429.gif)

このように、非同期通信を用いれば、ページ全体を書き換えるための HTML ではなく、一部を書き換えるためのデータを取得することが可能になります。

では次は、非同期通信でデータを取得する際のデータフォーマットである「XML」の意味について確認していきたいと思います。

# 参考文献

- [Javascript の歴史 - 木暮　仁](http://www.kogures.com/hitoshi/history/javascript/index.html)
- [サバイバル TypeScript - TypeScript 誕生の背景](https://typescriptbook.jp/overview/before-typescript)
- [いまさら聞けない、“Ajax”とは何なのか？](https://atmarkit.itmedia.co.jp/ait/articles/0708/23/news134.html)
- [MDN - サーバからのデータ取得](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
