import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "articles");

async function main() {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const id = fileName.replace(/\.md$/, "");
    const { content, data } = matter(fileContents);

    return {
      id,
      content,
      ...data,
    };
  });

  const sorted = allArticlesData.sort((articleA, articleB) => {
    if (articleA.date < articleB.date) {
      return 1;
    } else if (articleA.date > articleB.date) {
      return -1;
    } else {
      return 0;
    }
  });
  fs.writeFileSync(
    "./public/rss.xml",
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>aki blog</title>
    <link>https://blog-kahamura.vercel.app/</link>
    <description>aki blog</description>
    <language>ja</language>
    ${
      sorted[0].date !== null
        ? `<lastBuildDate>${new Date(
            sorted[0].date
          ).toUTCString()}</lastBuildDate>`
        : ""
    }
    ${sorted.map(generateRssItem).join("")}
  </channel>
</rss>`
  );
}

function generateRssItem(article) {
  const link =
    article.link != null
      ? article.link
      : `https://blog-kahamura.vercel.app/articles/${article.id}`;
  return `<item>
  <guid>https://blog-kahamura.vercel.app/articles/${article.id}</guid>
  <title>${article.title}</title>
  <link>${link}</link>
  <content:encoded><![CDATA[${article.content}]]></content:encoded>
  ${
    article.date !== null
      ? `<pubDate>${new Date(article.date).toUTCString()}</pubDate>`
      : ""
  }
</item>`;
}

main();
