import React from "react";
import Head from "next/head";
import Date from "../../components/date";
import { Article, getAllArticleIds, getArticleData } from "../../lib/articles";
import { GetStaticPropsContext } from "next";

type Props = {
  articleData: Article;
};

export async function getStaticPaths() {
  const paths = getAllArticleIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const articleData = await getArticleData(context.params?.id ?? "");
  return {
    props: {
      articleData,
    },
  };
};

const Article: React.FC<Props> = ({ articleData }) => {
  return (
    <div>
      <Head>
        <title>{articleData.title}</title>
      </Head>
      <div className="text-4xl dark:text-white font-bold mb-3">
        {articleData.title}
      </div>
      <div className="pb-10">
        <Date dateString={articleData.date} />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml ?? "" }}
      />
    </div>
  );
};

export default Article;
