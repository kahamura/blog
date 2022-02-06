import dayjs from "dayjs";

type Props = {
  dateString: string;
  className?: string;
};

const Date: React.FC<Props> = ({ dateString, className }) => {
  const date = dayjs(dateString).format("MMMM DD, YYYY");
  return (
    <time dateTime={dateString} className={className}>
      {date}
    </time>
  );
};

export default Date;
