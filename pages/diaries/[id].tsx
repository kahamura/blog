import React from "react";
import Head from "next/head";
import Date from "../../components/date";
import { Diary, getAllDiaryIds, getDiaryData } from "../../lib/diaries";
import { GetStaticPropsContext } from "next";

type Props = {
  diaryData: Diary;
};

export async function getStaticPaths() {
  const paths = getAllDiaryIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const diaryData = await getDiaryData(context.params?.id ?? "");
  return {
    props: {
      diaryData,
    },
  };
};

const Diary: React.FC<Props> = ({ diaryData }) => {
  return (
    <div>
      <Head>
        <title>{diaryData.title}</title>
        <meta property="og:title" content={diaryData.title} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="text-[30px] dark:text-white font-bold mb-3">
        {diaryData.title}
      </div>
      <div className="pb-4">
        <Date dateString={diaryData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: diaryData.contentHtml ?? "" }} />
    </div>
  );
};

export default Diary;
