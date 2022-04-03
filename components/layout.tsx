import Link from "next/link";
import Head from "next/head";
import ToggleDark from "./toggleDark";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="dark:bg-[#222831] bg-white min-h-screen bg-auto">
      <div className="max-w-xl mx-auto px-4 py-6 sm:py-10 prose dark:prose-invert">
        <Head>
          <title>aki blog</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <header>
          <div className="flex justify-between mb-12">
            <Link href="/">
              <a className="text-rose-300 text-4xl font-bold no-underline">
                aki blog
              </a>
            </Link>
            <ToggleDark />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
