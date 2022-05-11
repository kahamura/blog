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
        <meta property="og:title" content={articleData.title} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:image" content={articleData.image} />
      </Head>
      <h1 className="text-3xl text-gray-700 dark:text-white">
        {articleData.title}
      </h1>
      <div className="pb-4">
        <Date dateString={articleData.date} />
      </div>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml ?? "" }}
      />
      <div className="py-10">
        <a href="https://www.buymeacoffee.com/kahamura">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="buymeacoffee"
            src="https://img.buymeacoffee.com/button-api/?text=Buy me a doughnut&emoji=🍩&slug=kahamura&button_colour=fecdd3&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00"
          />
        </a>
      </div>
    </div>
  );
};

export default Article;
