import Link from "next/link";
import { getSortedDiariesData, Diary } from "../../lib/diaries";

type Props = {
  allDiariesData: Diary[];
};

export async function getStaticProps() {
  const allDiariesData = getSortedDiariesData();
  return {
    props: {
      allDiariesData,
    },
  };
}

const Diaries: React.FC<Props> = ({ allDiariesData }) => (
  <div className="pt-3">
    {allDiariesData.map(({ id, date, title, link }) => (
      <div key={id} className="mb-10">
        <Link href={link ?? `/diaries/${id}`}>
          <a className="text-xl font-bold no-underline">{title}</a>
        </Link>
        <div className="text-xs my-2">{date}</div>
      </div>
    ))}
  </div>
);

export default Diaries;
