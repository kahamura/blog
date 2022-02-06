import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

export type Diary = {
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

const diariesDirectory = path.join(process.cwd(), "diaries");

export const getSortedDiariesData = () => {
  const fileNames = fs.readdirSync(diariesDirectory);

  const allDiariesData = fileNames.map((fileName) => {
    const fullPath = path.join(diariesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const id = fileName.replace(/\.md$/, "");
    const { content, data } = matter(fileContents);

    return {
      id,
      content,
      ...(data as Data),
    };
  });

  return allDiariesData.sort((diaryA, diaryB) => {
    if (diaryA.date < diaryB.date) {
      return 1;
    } else if (diaryA.date > diaryB.date) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const getAllDiaryIds = () => {
  const fileNames = fs.readdirSync(diariesDirectory);
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }));
};

export const getDiaryData = async (id: string): Promise<Diary> => {
  const fullPath = path.join(diariesDirectory, `${id}.md`);
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
