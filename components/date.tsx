import dayjs from "dayjs";

type Props = {
  dateString: string;
};

const Date: React.FC<Props> = ({ dateString }) => {
  const date = dayjs(dateString).format("MMMM DD, YYYY");
  return <time dateTime={dateString}>{date}</time>;
};

export default Date;
