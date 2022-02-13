import Link from "next/link";
import { getSortedArticlesData, Article } from "../../lib/articles";

type Props = {
  allArticlesData: Article[];
};

export async function getStaticProps() {
  const allArticlesData = getSortedArticlesData();
  return {
    props: {
      allArticlesData,
    },
  };
}

const Articles: React.FC<Props> = ({ allArticlesData }) => (
  <div className="pt-3">
    {allArticlesData.map(({ id, date, title, tags, link }) => (
      <div key={id} className="mb-10">
        <Link href={link ?? `/articles/${id}`}>
          <a className="text-xl font-bold no-underline">{title}</a>
        </Link>
        <div className="text-xs my-2">{date}</div>
        <div>
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="border border-rose-300 rounded-md text-xs px-5 py-0.5 mr-3 dark:text-rose-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Articles;
