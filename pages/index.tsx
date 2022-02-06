import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div className="flex mb-16">
        <Image
          priority
          src="/images/profile.jpg"
          height={70}
          width={70}
          alt=""
          className="rounded-full"
        />
        <div className=" self-center ml-5">
          <div className="font-bold">Aki Kahamura</div>
          <div>
            <span>frontend engineer / </span>
            <Link href="https://twitter.com/_kahamura_">
              <a className="">Twitter</a>
            </Link>
            <span> / </span>
            <Link href="https://zenn.dev/ak">
              <a className="">Zenn</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-1">
        <Link href="/articles">
          <a className="flex no-underline">
            <div className="bg-rose-200 dark:bg-white w-16 h-16 rounded-md flex place-items-center place-content-center">
              <Image
                src="/images/article.svg"
                width={36}
                height={36}
                alt=""
                className="mx-auto"
              />
            </div>
            <div className="font-bold text-[26px] self-center ml-6">
              Article
            </div>
          </a>
        </Link>
        <Link href="/diaries">
          <a className="flex mt-6 no-underline">
            <div className="bg-rose-200 dark:bg-white rounded-md w-16 h-16 flex place-items-center place-content-center">
              <Image
                src="/images/diary.svg"
                width={36}
                height={36}
                alt=""
                className="mx-auto !-mr-0.5"
              />
            </div>
            <div className=" font-bold text-[26px] self-center ml-6">Diary</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
