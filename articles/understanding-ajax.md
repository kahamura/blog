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

同期通信では、クライアントがサーバーに対してリクエストを送ると、サーバからレスポンスが送られてくるまで、クライアントは待ち状態となります。

![](https://storage.googleapis.com/zenn-user-upload/0198ec251238-20220501.png)

待ち状態となるので、ユーザーはその間に他の UI を操作をすることはできません。サーバーとの通信が終了して Web ページが描画された後に、ようやくユーザーは操作を再開できるようになります。

一方、非同期通信では待ち続けるということはしません。

![](https://storage.googleapis.com/zenn-user-upload/175bc7ed8584-20220501.png)

クライアントは、サーバからのレスポンスを待たずに次の処理へ進むことができます。ユーザーにとっては、通信中であっても他の UI を操作をすることができるため、同期通信と比べて快適に Web アプリケーションを利用することができます。

## XML とは

では次は、Ajax の文字「X」の部分である XML がどのような意味なのか確認していきたいと思います。

XML とは、「Extensible Markup Language」の略で、文書やデータの意味や構造を記述するためのマークアップ言語の 1 つです。

> XML とは、文書やデータの意味や構造を記述するためのマークアップ言語の一つ。
>
> [IT 用語辞典 e-Words - XML](https://e-words.jp/w/XML.html)

XML は、もともと「**SGML**」 というマークアップ言語をベースに作られました。

SGML は 1980 年代に、軍事や学術の分野で大量の文書を長期にわたって利用するために開発されました。
しかし SGML の仕様はとても複雑で処理も重く、Web の利用には適していなかったため、普及はあまりしませんでした。そこで、これらの欠点を克服して再設計されたのが「**XML**」です。

XML では、HTML と同じように、タグを使ってデータの種類や意味を表現します。HTML では前もって用意されているタグしか使えませんが、XML ではユーザーが独自にタグを定義することができます。

```xml
<?xml version="1.0" ?>
<book>
    <title>吾輩は猫である</title>
    <author>夏目 漱石</author>
</book>
```

例えば、 上記の XML では 1 冊の本の情報が表現されています。

最初の行は、この文書が XML 文書であることを示します。そしてデータの本体は 2 行目以降から始まります。

本体の中のタグは、入れ子の構造を持つことができます。上記の例では、`book` というタグが `title` タグと `author` タグを挟み込んでいます。
このように記述することで、「本 (book) 」が「書名 (title) 」と「著者名 (author) 」の情報を含んでいることを表現することができます。

Ajax では、クライアントとサーバー間でデータを受け渡しする際のデータフォーマットとして、この XML が利用されます。（ただし現在は JSON の方がよく使われます。）
では次は、その XML 形式のデータをやり取りするために使われるオブジェクトである「XMLHttpRequest」について解説していきたいと思います。

## XMLHttpRequest

「XMLHttpRequest」とは、サーバーと HTTP 通信をするときに使用される JavaScript のオブジェクトです。

名前に XML という文字が入っていますが、XML 形式だけ扱うという訳ではなく JSON 形式のデータなども扱うことができます。

> XMLHttpRequest (XHR) オブジェクトは、サーバーと対話するために使用されます。ページ全体を更新する必要なしに、データを受け取ることができます。
>
> 引用: [MDN - XMLHttpRequest](https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest)

本来、サーバーと通信する際は、別のページに遷移したりページを再読み込みしたりするなどの必要があります。
しかし Ajax を利用することで、同じページを表示させたまま、HTTP 通信を何度も行うことができるようになりました。XMLHttpRequest は、このような通信を行うために使用される JavaScript のオブジェクトです。

XMLHttpRequest を使用すると、必要に応じていつでもサーバーに対してリクエストを送り、XML・JSON 形式のデータを読み込むことができます。

具体的には、次のように利用します。

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
XMLHttpRequest を使った場合、コードが見辛くなってしまうという問題があるのですが、Fetch API を使用すればよりシンプルでモダンな書き方をすることができます。

# 参考文献

- [Javascript の歴史 - 木暮　仁](http://www.kogures.com/hitoshi/history/javascript/index.html)
- [サバイバル TypeScript - TypeScript 誕生の背景](https://typescriptbook.jp/overview/before-typescript)
- [いまさら聞けない、“Ajax”とは何なのか？](https://atmarkit.itmedia.co.jp/ait/articles/0708/23/news134.html)
- [MDN - サーバからのデータ取得](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
