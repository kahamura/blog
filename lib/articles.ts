import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

export type Article = {
  id: string;
  content?: string;
  contentHtml?: string;
} & Data;

type Data = {
  title: string;
  date: string;
  tags?: string[];
  link?: string;
};

const articlesDirectory = path.join(process.cwd(), "articles");

export const getSortedArticlesData = () => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const id = fileName.replace(/\.md$/, "");
    const { content, data } = matter(fileContents);

    return {
      id,
      content,
      ...(data as Data),
    };
  });

  return allArticlesData.sort((articleA, articleB) => {
    if (articleA.date < articleB.date) {
      return 1;
    } else if (articleA.date > articleB.date) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const getAllArticleIds = () => {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));
};

export const getArticleData = async (id: string): Promise<Article> => {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(data as Data),
  };
};
