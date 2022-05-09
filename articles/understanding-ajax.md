---
title: "Ajaxについて理解する"
date: "2022-04-24"
tags: ["Web", "JavaScript"]
---

# Ajax の登場背景

Ajax を理解するためには、まずどのような背景で生まれたのかを理解するのが良いと思います。そのため、この章では Web・JavaScript の歴史を振り返りつつ、その登場背景について解説していきたいと思います。

## Web の誕生

Web は、1989 年にスイスのジュネーブにある CERN（欧州原子核研究機構） に所属していた **Tim Berners-Lee** 氏によって考案されました。

[![Image from Gyazo](https://i.gyazo.com/2d486b41647a1d61e5982e876c52ea8e.png)](https://gyazo.com/2d486b41647a1d61e5982e876c52ea8e)

当時の CERN にはたくさんの研究者が在籍しており、膨大な数の論文やデータを簡単に共有できるような仕組みが必要でした。そこで、ソフトウェアの技術者として CERN に在籍していた Tim Berners-Lee 氏は、論文などの文書を相互に結びつける仕組みとして「World Wide Web」を考案し、さらに 1991 年 には世界初となる [Web サイト](http://info.cern.ch/hypertext/WWW/TheProject.html) を公開しました。

1990 年代前半の Web は、HTML と CSS で記述された、いわゆる静的な Web ページがほとんどでした。しかし、静的な Web ページでは出来ることが限られていたため、次第に Web サイトを動的にしたいというニーズが高まってきました。

そして、そのニーズに応えるために登場したのが Java Applet や JavaScript といった技術です。

## JavaScript の誕生

Java Applet は、ネットワーク経由でブラウザに読み込まれて実行される Java のアプリケーションの一種です。1996 年に Netscape Navigator 2.0 に搭載されたことで普及しましたが、Java Applet を組み込んだ Web サイトは動作が重くなりがちだったため、次第に利用されなくなりました。

そして JavaScript は、Netscape Communications 社の **Brendan Eich** 氏によって開発されたプログラミング言語です。JavaScript は、1995 年に自社のブラウザである Netscape Navigator 2.0 に実装されました。

[![Image from Gyazo](https://i.gyazo.com/b42424c9e9274d20b0dfc0fa74e2e103.png)](https://gyazo.com/b42424c9e9274d20b0dfc0fa74e2e103)

当時、Netscape Communications 社のライバルだった Microsoft 社は、シェア争いで引き離されてしまわないように、すぐに JavaScript を自社のブラウザである Internet Exproler に組み込もうとしました。しかし、Netscape Communications 社 は自社の優位性を保つために、ライセンスの供与を認めませんでした。その結果、Microsoft 社は JavaScript に似た「**JScript**」という言語を自社で開発し、1996 年には Internet Explorer 3.0 に組み込みました。

JavaScript と JScript はよく似ており、それなりに互換性もありましたが、お互いがシェア獲得のために独自に機能を開発していったため、どちらのブラウザでも動作するようなコードを書くことは困難でした。そのため JavaScript は「使い勝手が悪いプログラミング言語」というイメージが生まれてしまいました。

## JavaScript 軽視の時代

1990 年代後半からは、インターネットの普及に伴い、個人で Web サイトを制作する人が増加しました。当時の人々は、かっこいい Web サイトを作成するために、無駄にカーソルの軌跡を星でキラキラさせたり、文字の大きさを変化させたりなどのテクニックのために JavaScript を利用しました。その結果、センスが悪くゴテゴテしたページが多く誕生し、JavaScript は素人が使うプログラミング言語のイメージが染みついてしまいました。

また、当時は JavaScript はセキュリティ的に危ない という意見が多く、ブラウザの設定で JavaScript を OFF にしてネットサーフィンをするのが、IT リテラシーが高い人という印象がありました。そのため、サイトによっては『当サイトを閲覧するには JavaScript を ON にしてください』といった注意書きもしばしば見かけられました。

## JavaScript の復権

先述したとおり、JavaScript と JScript はそれぞれの仕様が微妙に異なっていたため互換性の問題がありましたが、それがますます深刻化するようになりました。そのため、1997 年からはヨーロッパの通信の標準化の団体である「Ecma International」によって標準化が成され、各ブラウザでは「ECMAScript」という仕様に準拠して実装が進められるようになりました。

そして 2000 年代中盤で、JavaScript は再び注目を集めるようになりました。そのきっかけになったのが、2005 年に Jesse James Garrett 氏によって発表された「[Ajax: A New Approach to Web Applications](https://web.archive.org/web/20051124064232/http://www.adaptivepath.com/publications/essays/archives/000385.php)」という記事です。Jesse James Garrett 氏は、この記事の中で、当時 Google Maps や Google Suggest で使用されていた技術を分析し、その技術をまとめて「**Ajax**」と名付けました。

では、「Ajax」とは具体的にどのような技術なのでしょうか。次の章からは、Ajax の定義などについて詳しく見ていきたいと思います。

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

ところで、彼はなぜ Ajax という言葉を生み出したのでしょうか。その答えは、[記事](https://web.archive.org/web/20051124064232/http://www.adaptivepath.com/publications/essays/archives/000385.php)の最後にある Q&A のセクションの中にあります。次の引用の通り、彼は会社の顧客と話すときに毎回 "Asynchronous JavaScript + CSS + DOM + XMLHttpRequest" と長々と言うのが面倒だったようです。

> Q. Why did you feel the need to give this a name?
>
> A. I needed something shorter than “Asynchronous JavaScript+CSS+DOM+XMLHttpRequest” to use when discussing this approach with clients.

また、アメリカでは元々「[AJAX](<https://en.wikipedia.org/wiki/Ajax_(cleaning_product)>)」という食器用洗剤が販売されており、そこからもじったものではないかと考えられています。

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

同期通信では、クライアントがサーバーに対してリクエストを送ると、サーバからレスポンスが送られてくるまで、クライアントは待ち状態となります。

[![Image from Gyazo](https://i.gyazo.com/bcc3dbdad44d3571b09da89d0770aea8.png)](https://gyazo.com/bcc3dbdad44d3571b09da89d0770aea8)

待ち状態となるので、ユーザーはその間に他の UI を操作をすることはできません。サーバーとの通信が終了して Web ページが描画された後に、ようやくユーザーは操作を再開できるようになります。

一方、非同期通信では、レスポンスを待ち続けるということはしません。

[![Image from Gyazo](https://i.gyazo.com/15b2f9844c2e401cbc99d0ee182e21d4.png)](https://gyazo.com/15b2f9844c2e401cbc99d0ee182e21d4)

クライアントは、サーバからの応答を待たずに次の処理へ進むことができます。ユーザーにとっては、通信中であっても他の UI を操作をすることができるため、同期通信と比べて快適に Web アプリケーションを利用することができます。

## XML とは

では次は、Ajax の文字「x」の部分である XML の意味について確認していきたいと思います。

「**XML**」とは、Extensible Markup Language の略で、文書やデータの意味や構造を記述するためのマークアップ言語の 1 つです。

> XML とは、文書やデータの意味や構造を記述するためのマークアップ言語の一つ。
>
> [IT 用語辞典 e-Words - XML](https://e-words.jp/w/XML.html)

XML は、もともと「[**SGML**](https://developer.mozilla.org/ja/docs/Glossary/SGML)」 というマークアップ言語をベースに作られました。

SGML は 1980 年代に、軍事や学術の分野で大量の文書を長期にわたって利用するために開発されました。
しかし SGML の仕様はとても複雑で処理も重く、Web の利用には適していなかったため、普及はあまりしませんでした。そこで、これらの欠点を克服して再設計されたのが「**XML**」です。

XML では、HTML と同じように、タグを使ってデータの種類や意味を表現します。HTML では前もって用意されているタグしか使えませんが、XML ではユーザーが独自に定義したタグを利用することができます。

```xml
<?xml version="1.0" ?>
<book>
    <title>吾輩は猫である</title>
    <author>夏目 漱石</author>
</book>
```

例えば、 上記の XML では 1 冊の本の情報が表現されています。

最初の行は、この文書が XML 文書であることを示しています。そしてデータの本体は 2 行目以降から始まります。

本体の中のタグは、入れ子の構造を持つことができます。上記の例では、`book` というタグが `title` タグと `author` タグを挟み込んでいます。
このように記述することで、「本 (book) 」が「書名 (title) 」と「著者名 (author) 」の情報を含んでいることを表現することができます。

Ajax では、クライアントとサーバー間で、データを受け渡しするときのデータフォーマットとして XML が利用されます。（ただし現在は JSON の方がよく使われています。）

では次は、XML 形式のデータをやり取りするために使われるオブジェクトである「XMLHttpRequest」について解説していきたいと思います。

## XMLHttpRequest

「**XMLHttpRequest**」とは、サーバーと HTTP 通信をするときに使用される JavaScript のオブジェクトです。

名前に XML という文字が入っていますが、XML 形式だけ扱うという訳ではなく JSON 形式のデータなども扱うことができます。

> XMLHttpRequest (XHR) オブジェクトは、サーバーと対話するために使用されます。ページ全体を更新する必要なしに、データを受け取ることができます。
>
> 引用: [MDN - XMLHttpRequest](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest)

本来、サーバーと通信するときは、別のページに遷移したりページを再読み込みしたりする必要があります。
しかし、Ajax を利用することで同じページを表示させたまま、HTTP 通信を何度も行うことが可能になります。XMLHttpRequest は、このような通信を行うために利用される JavaScript のオブジェクトです。

XMLHttpRequest を使用すると、必要に応じていつでもサーバーに対してリクエストを送り、XML や JSON 形式のデータを読み込むことができます。

具体的には、次のように使用します。

```js
var xhr = new XMLHttpRequest(); // --------- ①
xhr.open("GET", "/test.xml", true); // --------- ②
xhr.send(); // --------- ③
xhr.onload = () => {
  console.log(xhr.response);
}; // --------- ④
```

1. XMLHttpRequest のインスタンスを生成する
2. open メソッドで通信を初期化する
   - 第 1 引数 : HTTP リクエストメソッド
   - 第 2 引数 : URL
   - 第 3 引数 : 非同期にするかどうかの真偽値（デフォルト値は true）
3. send メソッドでリクエストを送信する
4. onload で読み込みが成功したときに実行させる処理を指定する

ただし 最近では、XMLHttpRequest よりも [Fetch API](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch) の方がよく利用されます。
XMLHttpRequest を使った場合、コードが見辛くなってしまう問題があるのですが、Fetch API を使用すればシンプルでよりモダンな書き方をすることができます。

## DOM とは

「**DOM**」とは、Document Object Model の略で、ウェブ文書のためのプログラミングインターフェイスです。

> ドキュメントオブジェクトモデル (DOM) はウェブ文書のためのプログラミングインターフェイスです。ページを表現するため、プログラムが文書構造、スタイル、内容を変更することができます。 DOM は文書をノードとオブジェクトで表現します。
>
> 引用: [MDN - DOM の紹介](https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Introduction)

例えば、動的な Web アプリケーションを自分で作る場合、クリックなどのユーザーの動きによって Web ページの見た目の一部を変化させたいと思うことがあると思います。

しかし Web ページを記述している HTML 自体は、単なるテキストのデータです。テキストデータでは、HTML の要素を変化させることはできません。
変化させるには、HTML の構造を扱うための API が必要です。そこで「**DOM**」と呼ばれる API が必要になります。

DOM を使うと、HTML におけるタグは単なるテキストではなく、『情報を持ったオブジェクト』として扱うことができます。

この『情報を持ったオブジェクト』は、JavaScript から利用できるようになっています。このオブジェクトを取り出して中身を書き換えた場合は、自動的に対応する要素の表示も変更されます。

```js
const nodes = document.getElementsByTagName("h1");
nodes[0].style.color = "blue";
```

例えば上記のコードを実行すると、`h1` のオブジェクトを JavaScript で取り出して、文字色を青に変更することができます。
実際にこのコードをブラウザのインスペクターで実行すると、『Ajax について理解する』というタイトルの文字が青色に変化しているはずです。

このように、 DOM を使用すれば Web ページを表示させた後でも、要素を自由に変更することが可能になります。

# Ajax の全体像

これまでの章では、asynchronous、 XML、 XMLHttpRequest、 Document Object Model の 4 つの技術についてそれぞれ解説してきました。

では、これらの技術は Ajax でどのように利用されているのでしょうか。Ajax の全体像を理解するため、この章では従来の Web アプリケーションと Ajax を利用した Web アプリケーションを比較しつつ見ていきたいと思います。

まず、従来の Web アプリケーションについてです。これまでは、ブラウザからサーバーに対してリクエストを送信すると、サーバーからデータが返ってくるまで、ブラウザは処理を中断して待機していなければなりませんでした。

[![Image from Gyazo](https://i.gyazo.com/f9707606963bf6380360acb6b3197a2d.png)](https://gyazo.com/f9707606963bf6380360acb6b3197a2d)

この間、ユーザーはずっと待ち続けなければなりません。つまり、Web ページの操作を何もできないことになります。その上、サーバーはクライアントと通信する度に Web ページ全体の HTML を返すので、ブラウザは毎回の通信で画面全体を描画しなおす必要があります。
その結果、画面を読み込む度に時間がかかったり、画面にチラつきが発生したりなどの問題がありました。

一方、Ajax を使った Web アプリケーションの場合は、サーバーとの通信は非同期で行われます。そのため、通信が終わっていなくても、ユーザーは画面の他の UI を操作することが可能になります。

[![Image from Gyazo](https://i.gyazo.com/3d99172a3a8e1d5bc6f5e8ba4e2977ca.png)](https://gyazo.com/3d99172a3a8e1d5bc6f5e8ba4e2977ca)

Ajax では、XMLHttpRequest オブジェクトを使って、画面上の不足しているデータだけをサーバーにリクエストします。サーバーはレスポンスとして、従来の HTML の形式ではなく、XML 形式や JSON 形式でデータを送信します。
ブラウザは、データを取得したら DOM を使って Web ページの一部だけを更新するので、従来の方法よりも読み込みにかかる時間を減らし、画面のチラつきも最小限に抑えることができます。

例えば、Google Maps では、地図をドラッグすることで自由に見る場所を移動することができます。
これは、ユーザーの操作に合わせて足りないデータを取得し、動的に Web ページを書き換えるという Ajax の技術を用いて実現しているからです。

# 参考文献

- [Javascript の歴史 - 木暮　仁](http://www.kogures.com/hitoshi/history/javascript/index.html)
- [サバイバル TypeScript - TypeScript 誕生の背景](https://typescriptbook.jp/overview/before-typescript)
- [いまさら聞けない、“Ajax”とは何なのか？ - ITmedia](https://atmarkit.itmedia.co.jp/ait/articles/0708/23/news134.html)
- [いまさら聞けない JavaScript 入門 - ITmedia](https://atmarkit.itmedia.co.jp/ait/articles/0707/17/news114.html)
- [MDN - サーバからのデータ取得](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [図解まるわかり プログラミングのしくみ](https://www.shoeisha.co.jp/book/detail/9784798163284)
- [第一部 XML 文書の作り方 - ITmedia](https://atmarkit.itmedia.co.jp/ait/articles/0105/08/news002.html)
